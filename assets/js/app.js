

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
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Segments",
  hoverProperty: "status_title_github",
  sortProperty: "fqnid",
  sortOrder: "ascend",
};

var properties = [{
  value: "fulcrum_record_link",
  label: "Fulcrum Record",
  table: {
    visible: false
  },
  filter: {
    type: "string"
  },
},
{
  value: "fulcrum_id",
  label: "Record ID",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string"
  },
  info: false
},
{
  value: "contractor",
  label: "Contractor",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  },
  info: false
},
{
  value: "gps_directions_1",
  label: "GPS Directions",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string"
  }
},
{
  value: "status_title",
  label: "Status",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "hub",
  label: "Hub",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "site",
  label: "Site",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "wpid",
  label: "WPID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "fqnid",
  label: "ROUTE FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "fiber_fqnid_1",
  label: "FIBER FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "ntp_date",
  label: "Proposed Start Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "proposed_type",
  label: "Proposed Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "proposed_product",
  label: "Proposed Product",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "proposed_footage",
  label: "Proposed Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
  }
},
{
  value: "construction_type_cx_final",
  label: "Construction Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "construction_start_date_cx_final",
  label: "Construction Start Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "construction_complete_date_cx_final",
  label: "Construction Complete Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "construction_pass_date_qc_final",
  label: "Construction QC Pass Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "construction_footage_cx_final",
  label: "Construction Total Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
  }
},
{
  value: "cable_placement_type_final",
  label: "Cable Placement Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "cable_placement_start_date_cx_final",
  label: "Cable Placement Start Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "cable_placement_complete_date_cx_final",
  label: "Cable Placement Complete Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "cable_placement_pass_date_qc_final",
  label: "Cable Placement QC Pass Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "cable_placement_total_footage_cx_final",
  label: "Cable Placement Total Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
  },
}];


// Configuration of Restoration in Fulcrum

var config1 = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson?child=restoration_repeat",
  layerName: "Restoration",
  hoverProperty: "restoration_items",
  sortProperty: "date_resto",
  sortOrder: "ascend",
};

var properties1 = [{
  value: "restoration_items",
  label: "Restoration Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "date_resto",
  label: "Restoration Date",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "date"
  }
},
{
  value: "restoration_complete_contractor",
  label: "Restoration Complete (Contractor)",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "restoration_complete_tilson",
  label: "Restoration Complete (Tilson)",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
}];


var restoBeforeProps = [{
  value: "dirt_resto_b_cx_url",
  label: "Dirt",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "concrete_resto_b_cx_url",
  label: "Concrete",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "asphalt_resto_b_cx_url",
  label: "Asphalt",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "start_handhole_resto_b_cx_url",
  label: "Start Handhole",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "end_handhole_resto_b_cx_url",
  label: "End Handhole",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "checkbox",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
}];


var featureBluestakesVid = [{
  value: "locates_cx_url",
  label: "BlueStakes",
  table: {
    visible: false,
    sortable: false
  }
}];



var potholePictures = [{
  value: "asphalt_potholes_url",
  label: "Asphalt",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "concrete_potholes_url",
  label: "Concrete",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "dirt_potholes_url",
  label: "Dirt",
  table: {
    visible: false,
    sortable: false
  }
}];



function drawCharts() {
  // HUB COMPLETE
  $(function() {
    var result = alasql("SELECT hub AS label, COUNT(NULLIF(cable_placement_total_footage_cx_final::NUMBER,0)) AS total FROM ? GROUP BY hub", [features]);
    var columns = $.map(result, function(status) {
      return [[status.label, status.total]];
    });
    var chart = c3.generate({
        bindto: "#hub-complete-chart",
        data: {
          type: "gauge",
          columns: columns
        }
    });
  });

  // HUB TOTAL FOOTAGE
  $(function() {
    var result = alasql("SELECT hub AS label, SUM(COALESCE(cable_placement_total_footage_cx_final::NUMBER)) AS footage FROM ? GROUP BY hub", [features]);
    var columns1 = $.map(result, function(hub) {
      return [[hub.label, hub.footage]];
    });
    var chart = c3.generate({
        bindto: "#hub-footage-chart",
        data: {

          type: "bar",
          columns: columns1
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Cable Footage"]
          }
        }
    });
  });


    // HUB MONTHLY FOOTAGE
  $(function() {
    var result = alasql("SELECT hub AS label, SUM(COALESCE(cable_placement_total_footage_cx_final::NUMBER)) AS footage FROM ? GROUP BY hub", [features]);
    var columns1 = $.map(result, function(hub) {
      return [[hub.label, hub.footage]];
    });
    var chart = c3.generate({
        bindto: "#hub-footage-chart",
        data: {

          type: "bar",
          columns: columns1
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Cable Footage"]
          }
        }
    });
  });


  // HUB STATUS 
  $(function() {
    var result = alasql("SELECT status AS label, COUNT(status) AS total FROM ? GROUP BY status", [features]);
    var columns = $.map(result, function(status) {
      return [[status.label, status.total]];
    });
    var chart = c3.generate({
        bindto: "#hub-status-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}

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


var featureLayer = L.geoJson(null, {
  filter: function(feature, layer) {
    if (feature.properties.contractor != "Tilson") return true;
  },
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      title: feature.properties["status_title_github"],
      riseOnHover: true,
      icon: L.icon({
        iconUrl: "assets/pictures/markers/cb0d0c.png",
        iconSize: [30, 40],
        iconAnchor: [15, 32]
      })
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature(L.stamp(layer));
          featureBluestakes(L.stamp(layer));
          featurePotholePics(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (config.hoverProperty) {
            $(".info-control").html(feature.properties[config.hoverProperty]);
            $(".info-control").show();
          }
        },
        mouseout: function (e) {
          $(".info-control").hide();
        }
      });
      if (feature.properties["marker-color"]) {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/markers/" + feature.properties["marker-color"].replace("#",'').toLowerCase() + ".png",
            iconSize: [30, 40],
            iconAnchor: [15, 32]
          })
        );
      }
    }
  }
});



var featureLayer1 = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      title: feature.properties["restoration_items"],
      riseOnHover: true,
      icon: L.icon({
        iconUrl: "assets/pictures/markers/242424.png",
        iconSize: [30, 40],
        iconAnchor: [15, 32]
      })
    });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature1(L.stamp(layer));
          RestoBeforePics(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer1.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (config1.hoverProperty) {
            $(".info-control").html(feature.properties[config1.hoverProperty]);
            $(".info-control").show();
          }
        },
        mouseout: function (e) {
          $(".info-control").hide();
        }
      });
      if (feature.properties.restoration_complete_contractor === "Yes") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/markers/b3b3b3.png",
            iconSize: [30, 40],
            iconAnchor: [15, 32]
          })
        );
      } else if (feature.properties.restoration_complete_contractor === "Yes" && feature.properties.restoration_complete_tilson === "Yes") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/markers/ffffff.png",
            iconSize: [30, 40],
            iconAnchor: [15, 32]
          })
        );
      }
    }
  }
});




// Fetch the Routes GeoJSON file

$.getJSON(config.geojson, function (data) {
  geojson = data;
  features = $.map(geojson.features, function(feature) {
    return feature.properties;
  });
  featureLayer.addData(data);
  buildConfig();
  $("#loading-mask").hide();
  var style = {
    "property": "status",
    "values": {
      "Segment Ready": "https://image.ibb.co/iXHCyH/1891c9.png",
      "Segment Not Ready": "https://image.ibb.co/hk21sc/242424.png",
      "Construction Started": "https://image.ibb.co/mC5Akx/ffd300.png",
      "Constractor CX QC": "https://image.ibb.co/hHRSXc/b3b3b3.png",
      "Tilson CX QC": "https://image.ibb.co/c3TVkx/ff8819.png",
      "Construction Fix": "https://image.ibb.co/cen1sc/cb0d0c.png",
      "Cable Placement Ready": "https://image.ibb.co/iXHCyH/1891c9.png",
      "Cable Placement Started": "https://image.ibb.co/mC5Akx/ffd300.png",
      "Contractor CP QC": "https://image.ibb.co/hHRSXc/b3b3b3.png",
      "Tilson CP QC": "https://image.ibb.co/c3TVkx/ff8819.png",
      "Cable Placement Fix": "https://image.ibb.co/cen1sc/cb0d0c.png",
      "Splicing/Testing Pending": "https://image.ibb.co/hxOkJH/87d30f.png"
    }
  }
  JSON.stringify(style);
  if (style.property && style.values) {
    $("#legend-item").removeClass("hidden");
    $("#legend-title").html(style.property.toUpperCase().replace(/_/g, " "));
    $.each(style.values, function(property, value) {
      if (value.startsWith("http")) {
        $("#legend").append("<p><img src='" + value + "'></i> " + property + "</p>");
      } else {
        $("#legend").append("<p><i style='background:" + value + "'></i> " + property + "</p>");
      }
    });
  }
});


// Fetch the Restoration GeoJSON file

$.getJSON(config1.geojson, function (data) {
  geojson = data
  features = $.map(geojson.features, function(feature) {
    return feature.properties;
  });
  featureLayer1.addData(data);
  $("#loading-mask").hide();
});



var map = L.map("map", {
  layers: [mapboxOSM, SLCLLDRoute, featureLayer, featureLayer1, highlightLayer]
}).fitWorld();


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
  "<span id='layer-name'>Routes</span>": featureLayer,
  "<span id='layer-name1'>Restoration</span>": featureLayer1,
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


function identifyFeature1(id) {
  var featureProperties = featureLayer1.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(properties1, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info1").html(content);
  $("#feature1Modal").modal("show");
};


$("#restoPicturesBtn").click(function() {
  $("#restoPicModal").modal("show");
  return false;
});


function RestoBeforePics(id) {
  var featureProperties = featureLayer1.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(restoBeforeProps, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#restoBefore").html(content);
};



$("#featureBluestakes").click(function() {
  $("#bluestakesModal").modal("show");
  return false;
});


function featureBluestakes(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/videos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='videoGallery(\""+ value +"\")'; return false;'>View Video</a>";
    }
    $.each(featureBluestakesVid, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#bluestakesModalBody").html(content);
};



$("#featurePictures").click(function() {
  $("#featuresPicturesModal").modal("show");
  return false;
});


function featurePotholePics(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(potholePictures, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#potholesPic").html(content);
};


function photoGallery(photos) {
  var photoArray = [];
  var photoIDs = photos.split("photos=")[1];
  $.each(photoIDs.split("%2C"), function(index, id) {
    photoArray.push({href: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos/" + id});
  });
  $.fancybox(photoArray, {
    "type": "image",
    "showNavArrows": true,
    "padding": 0,
    "scrolling": "no",
    beforeShow: function () {
      this.title = "Photo " + (this.index + 1) + " of " + this.group.length + (this.title ? " - " + this.title : "");
    }
  });
  return false;
};

function videoGallery(photos) {
  var photoArray = [];
  var photoIDs = photos.split("videos=")[1];
  $.each(photoIDs.split("%2C"), function(index, id) {
    photoArray.push({href: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/videos/" + id});
  });
  $.fancybox(photoArray, {
    "type": "iframe",
    "showNavArrows": true,
    "padding": 0,
    "scrolling": "no",
    beforeShow: function () {
      this.title = "Video " + (this.index + 1) + " of " + this.group.length + (this.title ? " - " + this.title : "");
    }
  });
  return false;
};



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
  featureLayer1.clearLayers();
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
  $.getJSON(config1.geojson, function (data) {
    geojson = data
    features = $.map(geojson.features, function(feature) {
      return feature.properties;
    });
    featureLayer1.addData(data);
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
