

checkAuth();
bindUIActions();


function bindUIActions() {
  $("#login-btn").click(function() {
    login();
  });

  $("#login-modal").on("shown.bs.modal", function (e) {
    $(".modal-backdrop").css("opacity", "1");
  });

  $("#login-modal").on("hidden.bs.modal", function (e) {
    $(".modal-backdrop").css("opacity", "");
  });
};

function checkAuth() {
  if (!localStorage.getItem("fulcrum_app_token")) {
    $(document).ready(function() {
      $("#login-modal").modal("show");
    });
  } else {
    $("#login-modal").modal("hide");
  }
};

function login() {
  var username = $("#email").val();
  var password = $("#password").val();
  $.ajax({
    type: "GET",
    url: "https://api.fulcrumapp.com/api/v2/users.json",
    contentType: "application/json",
    dataType: "json",
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
    statusCode: {
      401: function() {
        alert("Incorrect credentials, please try again.");
      }
    },
    success: function (data) {
      $.each(data.user.contexts, function(index, context) {
        if (context.name == "Tilson SLC") {
          localStorage.setItem("fulcrum_app_token", btoa(context.api_token));
          localStorage.setItem("fulcrum_userfullname", data.user.first_name + " " + data.user.last_name);
          localStorage.setItem("fulcrum_useremail", data.user.email);
        }
      });
      if (!localStorage.getItem("fulcrum_app_token")) {
        alert("This login does not have access to the Tilson DataMap.");
      }
      checkAuth();
    }
  });
};



// Configuration of Routes in Fulcrum

var config = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/10/query?where=fqn_id+IS+NOT+NULL&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=false&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=pjson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Routes",
  hoverProperty: "fqn_id",
  sortProperty: "fqn_id",
  sortOrder: "ascend",
};

var properties = [{
  value: "constructiontype",
  label: "Route Type",
  table: {
    visible: true
  },
  filter: {
    type: "string",
  },
},
{
  value: "label_id_text",
  label: "Construction Type",
  table: {
    visible: true
  },
  filter: {
    type: "string",
  },
},
{
  value: "workorderid",
  label: "Work Order ID",
  table: {
    visible: true
  },
  filter: {
    type: "string",
  },
},
{
  value: "id",
  label: "3GIS ID",
  table: {
    visible: true
  },
  filter: {
    type: "string"
  },
},
{
  value: "fqn_id",
  label: "Route FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
  }
},
{
  value: "fibercable_fqnid",
  label: "Fiber FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
  },
},
{
  value: "sitespannfid",
  label: "Site NFID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
  }
},
{
  value: "calculatedlength",
  label: "Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
  }
}];


$(function() {
  $(".title").html(config.title);
});

function buildConfig() {
  filters = [];
  table = [{
    field: "action",
    title: "<i class='fa fa-gear'></i>&nbsp;Action",
    align: "center",
    valign: "middle",
    width: "75px",
    cardVisible: false,
    switchable: false,
    formatter: function(value, row, index) {
      return [
        '<a class="zoom" href="javascript:void(0)" title="Zoom" style="margin-right: 10px;">',
          '<i class="fa fa-search-plus"></i>',
        '</a>',
        '<a class="identify" href="javascript:void(0)" title="Identify" style="margin-right: 10px;">',
          '<i class="fa fa-info-circle"></i>',
        '</a>'
      ].join("");
    },
    events: {
      "click .zoom": function (e, value, row, index) {
        var layer = featureLayer.getLayer(row.leaflet_stamp);
        map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature(row.leaflet_stamp);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
      }
    }
  }];

  $.each(properties, function(index, value) {
    // Filter config
    if (value.filter) {
      var id;
      if (value.filter.type == "integer") {
        id = "cast(properties->"+ value.value +" as int)";
      }
      else if (value.filter.type == "double") {
        id = "cast(properties->"+ value.value +" as double)";
      }
      else {
        id = "properties->" + value.value;
      }
      filters.push({
        id: id,
        label: value.label
      });
      $.each(value.filter, function(key, val) {
        if (filters[index]) {
          // If values array is empty, fetch all distinct values
          if (key == "values" && val.length === 0) {
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson.features], function(results){
              distinctValues = [];
              $.each(results, function(index, value) {
                distinctValues.push(value.field);
              });
            });
            filters[index].values = distinctValues;
          } else {
            filters[index][key] = val;
          }
        }
      });
    }
    // Table config
    if (value.table) {
      table.push({
        field: value.value,
        title: value.label
      });
      $.each(value.table, function(key, val) {
        if (table[index+1]) {
          table[index+1][key] = val;
        }
      });
    }
  });

  buildFilters();
  buildTable();
}

// Basemap Layers
var mapboxOSM = L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvdHJ1c3QiLCJhIjoibGo4TG5nOCJ9.QJnT2dgjL4_4EA7WlK8Zkw', {
    maxZoom: 20
});


var mapboxSat = L.tileLayer('https://api.mapbox.com/v4/cfritz1387.573ca1ee/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZyaXR6MTM4NyIsImEiOiJjaWphZTZ0eHkwMDVwdWlseGx5aWhhbXlwIn0._lgb3vbGMSx1-jdZCufdgg', {
    maxZoom: 20
});


var SLCLLDRoute = L.tileLayer('http://ttm-tileify-proxy1.herokuapp.com/tiles/{z}/{x}/{y}?url=https%3A%2F%2Ftilsonwebdraco.3-gislive.com%2Farcgis%2Frest%2Fservices%2FSLClld%2FTilsonslc_lld%2FMapServer&transparent=true&layers=show%3A3%2C10%2C31%2C44%2C47%2C49', {
    maxZoom: 20
});


var highlightLayer = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 5,
      color: "#FFF",
      weight: 2,
      opacity: 1,
      fillColor: "#00FFFF",
      fillOpacity: 1,
      clickable: false
    });
  },
  style: function (feature) {
    return {
      color: "#00FFFF",
      weight: 2,
      opacity: 1,
      fillColor: "#00FFFF",
      fillOpacity: 0.5,
      clickable: false
    };
  }
});


// Fetch the Routes GeoJSON file

var map = L.map('map').setView([45.526, -122.667], 13);


var routesLayer = L.esri.featureLayer({
  url: 'https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/10'
}).addTo(map);

// ESRI geocoder
var searchControl = L.esri.Geocoding.Controls.geosearch({
  useMapBounds: 17
}).addTo(map);

// Info control
var info = L.control({
  position: "bottomleft"
});

// Custom info hover control
info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info-control");
  this.update();
  return this._div;
};
info.update = function (props) {
  this._div.innerHTML = "";
};
info.addTo(map);
$(".info-control").hide();

// Larger screens get expanded layer control
if (document.body.clientWidth <= 767) {
  isCollapsed = true;
} else {
  isCollapsed = false;
}
var baseLayers = {
  "Street Map": mapboxOSM,
  "Satellite Map": mapboxSat,
  "SLC LLD Route": SLCLLDRoute,
};
var overlayLayers = {
  "<span id='layer-name'>Routes</span>": routesLayer,
  "<span id='layer-name2'>Engineered</span>": SLCLLDRoute,
};


var layerControl = L.control.layers(baseLayers, overlayLayers, {
  collapsed: isCollapsed
}).addTo(map);

// Filter table to only show features in current map bounds
map.on("moveend", function (e) {
  syncTable();
});

map.on("click", function(e) {
  highlightLayer.clearLayers();
});

// Table formatter to make links clickable
function urlFormatter (value, row, index) {
  if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
    return "<a href='"+value+"' target='_blank'>"+value+"</a>";
  }
}


function buildFilters() {
  $("#query-builder").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}


function dateFilter() {
  var rules_widgets = {
    condition: 'OR',
    rules: [{
      id: 'date',
      operator: 'equal',
      value: '1991/11/17'
    }]
  };
$('#query-builder').queryBuilder({
    plugins: ['bt-tooltip-errors'],
    filters: [{
      id: 'date',
      label: 'Datepicker',
      type: 'date',
      validation: {
        format: 'YYYY/MM/DD'
      },
      plugin: 'datepicker',
      plugin_config: {
        format: 'yyyy/mm/dd',
        todayBtn: 'linked',
        todayHighlight: true,
        autoclose: true
      }
    }],
  });
  rules: rules_widgets
}


function applyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#query-builder").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson.features], function(features){
    featureLayer.clearLayers();
    featureLayer.addData(features);
    syncTable();
  });
}

function buildTable() {
  $("#table").bootstrapTable({
    cache: false,
    height: $("#table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config.sortProperty,
    sortOrder: config.sortOrder,
    toolbar: "#toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table,
    onClickRow: function(row, $element) {
      var layer = featureLayer.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      identifyFeature(row.leaflet_stamp);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(featureLayer.getBounds());

  $(window).resize(function () {
    $("#table").bootstrapTable("resetView", {
      height: $("#table-container").height()
    });
  });
}

function syncTable() {
  tableFeatures = [];
  featureLayer.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(featureLayer)) {
      featureLayer.getLayer()
      layer.feature.geometry.type === "Point"
      if (map.getBounds().contains(layer.getLatLng())) {
        tableFeatures.push(layer.feature.properties);
      }
    }
  });
  $("#table").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#table").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#feature-count").html($("#table").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#feature-count").html($("#table").bootstrapTable("getData").length + " visible features");
  }
}

function identifyFeature(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("https://www.google") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "GPS Directions" + "</a>";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(properties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info").html(content);
  $("#featureModal").modal("show");
}



function switchView(view) {
  if (view == "split") {
    $("#view").html("Split View");
    location.hash = "#split";
    $("#table-container").show();
    $("#table-container").css("height", "55%");
    $("#map-container").show();
    $("#map-container").css("height", "45%");
    $(window).resize();
    if (map) {
      map.invalidateSize();
    }
  } else if (view == "map") {
    $("#view").html("Map View");
    location.hash = "#map";
    $("#map-container").show();
    $("#map-container").css("height", "100%");
    $("#table-container").hide();
    if (map) {
      map.invalidateSize();
    }
  } else if (view == "table") {
    $("#view").html("Table View");
    location.hash = "#table";
    $("#table-container").show();
    $("#table-container").css("height", "100%");
    $("#map-container").hide();
    $(window).resize();
  }
}

$("[name='view']").click(function() {
  $(".in,.open").removeClass("in open");
  if (this.id === "map-graph") {
    switchView("split");
    return false;
  } else if (this.id === "map-only") {
    switchView("map");
    return false;
  } else if (this.id === "graph-only") {
    switchView("table");
    return false;
  }
});

L.easyPrint({
  title: 'Print',
  elementsToHide: 'p, h2, .gitButton'
}).addTo(map)


//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key1 =
  "https://docs.google.com/spreadsheets/d/1yNyg2grJYCICN0g_UkYuQXtTEZ_EFBVtXv--r9tc6oI/edit?usp=sharing";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns1 = [{
  "data": "hub",
  "title": "HUB"
}, {
  "data": "nfid",
  "title": "SITE NFID"
}, {
  "data": "site",
  "title": "SITE NAME"
}, {
  "data": "cable_footage",
  "title": "CABLE FOOTAGE"
}, {
  "data": "complete_percent",
  "title": "COMPLETE PERCENT"
}];

$(document).ready(function() {

  function initializeTabletopObject1() {
    Tabletop.init({
      key: key1,
      callback: function(data, tabletop) {
        writeTable1(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject1();

  function writeTable1(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic1').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": true,
      "data": data,
      "columns": columns1,
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable



//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key2 =
  "https://docs.google.com/spreadsheets/d/1deiny4hY9c3aYyrXNC-vnK1b1FmFJmq2Hcm6w0nNMv4/edit?usp=sharing";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns2 = [{
  "data": "type",
  "title": "TYPE"
}, {
  "data": "month_1",
  "title": "JAN '18"
}, {
  "data": "month_2",
  "title": "FEB '18"
}, {
  "data": "month_3",
  "title": "MAR '18"
}, {
  "data": "month_4",
  "title": "APR '18"
}, {
  "data": "month_5",
  "title": "MAY '18"
  }, {
  "data": "month_6",
  "title": "JUN '18"
}, {
  "data": "month_7",
  "title": "JUL '18"
}, {
  "data": "month_8",
  "title": "AUG '18"
}, {
  "data": "month_9",
  "title": "SEP '18"
  }, {
  "data": "month_10",
  "title": "OCT '18"
}, {
  "data": "month_11",
  "title": "NOV '18"
}, {
  "data": "month_12",
  "title": "DEC '18"
}, {
  "data": "month_13",
  "title": "JAN '19"
  }, {
  "data": "month_14",
  "title": "FEB '19"
}, {
  "data": "month_15",
  "title": "MAR '19"
}, {
  "data": "month_16",
  "title": "APR '19"
}, {
  "data": "month_17",
  "title": "MAY '19"
}];

$(document).ready(function() {

  function initializeTabletopObject2() {
    Tabletop.init({
      key: key2,
      callback: function(data, tabletop) {
        writeTable2(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject2();

  function writeTable2(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic2').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection1"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection1").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns2,
      "order": false,
      "pagingType": "simple",
      "paging": false,
      "searching": false,
    });
  }
});
//end of writeTable



$("#refresh-btn").click(function() {
  featureLayer.clearLayers();
  $.getJSON(config.geojson, function (data) {
    geojson = data;
    legendItems = {};
    features = $.map(geojson.features, function(feature) {
      return feature.properties;
    });
    featureLayer.addData(data);
    buildConfig();
    $("#loading-mask").hide();
  });
  syncTable();
  buildTable();
  buildFilters();
  map.fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#filter-btn").click(function() {
  $("#filterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#chart-btn").click(function() {
  $("#chartModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#sites-btn").click(function() {
  $("#sites-modal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#monthly-btn").click(function() {
  $("#monthly-modal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});


$("#view-sql-btn").click(function() {
  alert($("#query-builder").queryBuilder("getSQL", false, false).sql);
});

$("#apply-filter-btn").click(function() {
  applyFilter();
  $('#filterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#reset-filter-btn").click(function() {
  $("#query-builder").queryBuilder("reset");
  applyFilter();
});

$("#extent-btn").click(function() {
  map.fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legend-modal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '.' + dd + '.' + yyyy;


$("#download-csv-btn").click(function() {
  $("#table").tableExport({
    headings: true,
    type: "csv",
    ignoreColumn: [0],
    fileName: "DataMap_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-excel-btn").click(function() {
  $("#table").tableExport({
    headings: true,
    type: "excel",
    ignoreColumn: [0],
    fileName: "DataMap_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-pdf-btn").click(function() {
  $("#table").tableExport({
    type: "pdf",
    ignoreColumn: [0],
    fileName: "DataMap_"+ today +"",
    jspdf: {
      format: "bestfit",
      margins: {
        left: 20,
        right: 10,
        top: 20,
        bottom: 20
      },
      autotable: {
        extendWidth: true,
        overflow: "linebreak"
      }
    }
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#chartModal").on("shown.bs.modal", function (e) {
  drawCharts();
});
