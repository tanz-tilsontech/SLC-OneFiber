var config = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson",
  title: "SLC OneFiber Construction",
  layerName: "Segments",
  hoverProperty: "fqnid",
  sortProperty: "fqnid",
  sortOrder: "ascend"
};

var properties = [{
  value: "record_id",
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
  value: "status",
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
  label: "FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
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
    type: "string"
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
    input: "radio",
    operators: ["equal"],
    values: {
      "yes": "Yes",
      "no": "No"
    }
  }
}];

function drawCharts() {
  // Status
  $(function() {
    var result = alasql("SELECT status AS label, COUNT(*) AS total FROM ? GROUP BY status", [features]);
    var columns = $.map(result, function(status) {
      return [[status.label, status.total]];
    });
    var chart = c3.generate({
        bindto: "#status-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });

  // WPID
  $(function() {
    var result = alasql("SELECT wpid AS label, COUNT(*) AS total FROM ? GROUP BY wpid", [features]);
    var columns = $.map(result, function(wpid) {
      return [[wpid.label, wpid.total]];
    });
    var chart = c3.generate({
        bindto: "#wpid-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });


  // FQNID
  $(function() {
    var result = alasql("SELECT fqnid AS label, COUNT(*) AS total FROM ? GROUP BY fqnid", [features]);
    var columns = $.map(result, function(fqnid) {
      return [[fqnid.label, fqnid.total]];
    });
    var chart = c3.generate({
        bindto: "#fqnid-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}

$(function() {
    $(".title").html(config.title);
    $("#layer-name").html(config.layerName);
    $("#layer-name-2").html(config_field.layerName);
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
                '<a class="identify" href="javascript:void(0)" title="Identify">',
                '<i class="fa fa-info-circle"></i>',
                '</a>'
            ].join("");
        },
        events: {
            "click .zoom": function(e, value, row, index) {
                map.fitBounds(featureLayer.getLayer(row.leaflet_stamp).getBounds());
                highlightLayer.clearLayers();
                highlightLayer.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
            },
            "click .identify": function(e, value, row, index) {
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
                id = "cast(properties->" + value.value + " as int)";
            } else if (value.filter.type == "double") {
                id = "cast(properties->" + value.value + " as double)";
            } else {
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
                        alasql("SELECT DISTINCT(properties->" + value.value + ") AS field FROM ? ORDER BY field ASC", [geojson.features], function(results) {
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
                if (table[index + 1]) {
                    table[index + 1][key] = val;
                }
            });
        }
    });

    buildFilters();
    buildTable();
}

//field notes config
function buildConfigField() {
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
                '<a class="identify" href="javascript:void(0)" title="Identify">',
                '<i class="fa fa-info-circle"></i>',
                '</a>'
            ].join("");
        },
        events: {
            "click .zoom": function(e, value, row, index) {
                map.fitBounds(fieldfeatureLayer.getLayer(row.leaflet_stamp).getBounds());
                highlightLayer.clearLayers();
                highlightLayer.addData(fieldfeatureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
            },
            "click .identify": function(e, value, row, index) {
                identifyFieldFeature(row.leaflet_stamp);
                highlightLayer.clearLayers();
                highlightLayer.addData(fieldfeatureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
            }
        }
    }];
}

// Basemap Layers

var streetsLayer = L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvdHJ1c3QiLCJhIjoibGo4TG5nOCJ9.QJnT2dgjL4_4EA7WlK8Zkw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

//Mapbox studio style with CCGP and IRs
var customLayer = L.tileLayer('https://api.mapbox.com/v4/cfritz1387.573ca1ee/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZyaXR6MTM4NyIsImEiOiJjaWphZTZ0eHkwMDVwdWlseGx5aWhhbXlwIn0._lgb3vbGMSx1-jdZCufdgg', {
    maxZoom: 22,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>'
});


var satelliteLayer = L.esri.basemapLayer('Imagery');

var highlightLayer = L.geoJson(null, {
    pointToLayer: function(feature, latlng) {
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
    style: function(feature) {
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

//builds color ramp
function getColor(d) {
    return d >= 114 ? '#bd0026' :
        d >= 100 ? '#f03b20' :
        d >= 90 ? '#fd8d3c' :
        d >= 72 ? '#fecc5c' :
        '#cbcb9c';
}


//field notes feature layer
var fieldfeatureLayer = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },

    //removed point to layer 
    /* pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },*/

    onEachFeature: function(feature, layer) {
        if (feature.properties) {
            layer.on({
                click: function(e) {
                    identifyFieldFeature(L.stamp(layer));
                    highlightLayer.clearLayers();
                    highlightLayer.addData(fieldfeatureLayer.getLayer(L.stamp(layer)).toGeoJSON());
                }
            });
        }
    }
});

var featureLayer = L.geoJson(null, {
    filter: function(feature, layer) {
        return feature.geometry.coordinates[0] !== 0 && feature.geometry.coordinates[1] !== 0;
    },
    style: function(feature) {
        return {
            fillColor: getColor(feature.properties.Tap_Stem),
            weight: 2,
            opacity: 1,
            color: getColor(feature.properties.Tap_Stem),
            fillOpacity: 0.5
        };
    },


    onEachFeature: function(feature, layer) {
        if (feature.properties) {
            layer.on({
                click: function(e) {
                    identifyFeature(L.stamp(layer));
                    highlightLayer.clearLayers();
                    highlightLayer.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
                },
                mouseover: function(e) {
                    if (config.hoverProperty) {
                        $(".info-control").html(feature.properties[config.hoverProperty]);
                        $(".info-control").show();
                    }
                },
                mouseout: function(e) {
                    $(".info-control").hide();
                }
            });
        }
    }
});

var clusters = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 14
});


// Fetch the GeoJSON file
$.getJSON(config.geojson, function(data) {
    geojson = data;
    features = $.map(geojson.features, function(feature) {
        return feature.properties;
    });
    featureLayer.addData(data);
    buildConfig();
    $("#loading-mask").hide();
});


var map = L.map("map", {
    layers: [satelliteLayer, featureLayer, clusters, highlightLayer]
}).fitWorld();



// ESRI geocoder
var searchControl = L.esri.Geocoding.Controls.geosearch({
    useMapBounds: 17
}).addTo(map);

//legend
var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [58, 72, 90, 100, 114, 128],
        labels = [];
    div.innerHTML += '<b>Site Stem Density<br>(Trees/HA)</b><br>';
    
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length - 1; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + '&ndash;' + grades[i + 1] + '<br>' ;
    }

    return div;
};

legend.addTo(map);


// Info control
var info = L.control({
    position: "bottomright"
});

// Custom info hover control
info.onAdd = function(map) {
    this._div = L.DomUtil.create("div", "info-control");
    this.update();
    return this._div;
};
info.update = function(props) {
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
    "Street Map": streetsLayer,
    "Aerial Imagery": satelliteLayer,
    "Custom Layer": customLayer
};
var overlayLayers = {
    "<span id='layer-name'>GeoJSON Layer</span>": featureLayer,
    "<span id='layer-name-2'>GeoJSON Layer</span>": clusters,
};

var layerControl = L.control.layers(baseLayers, overlayLayers, {
    collapsed: isCollapsed
}).addTo(map);

L.easyPrint({
            title: 'My awesome print button',
            elementsToHide: 'p, h2, .gitButton'
        }).addTo(map);


// Filter table to only show features in current map bounds
map.on("moveend", function(e) {
    syncTable();
});

map.on("click", function(e) {
    highlightLayer.clearLayers();
});

// Table formatter to make links clickable
function urlFormatter(value, row, index) {
    if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
        return "<a href='" + value + "' target='_blank'>" + value + "</a>";
    }
}

function buildFilters() {
    $("#query-builder").queryBuilder({
        allow_empty: true,
        filters: filters
    });
}

function applyFilter() {
    var query = "SELECT * FROM ?";
    var sql = $("#query-builder").queryBuilder("getSQL", false, false).sql;
    if (sql.length > 0) {
        query += " WHERE " + sql;
    }
    alasql(query, [geojson.features], function(features) {
        console.log('applyFilter')
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
        onClickRow: function(row) {
            // do something!
        },
        onDblClickRow: function(row) {
            // do something!
        }
    });

    map.fitBounds(featureLayer.getBounds());

    $(window).resize(function() {
        $("#table").bootstrapTable("resetView", {
            height: $("#table-container").height()
        });
    });
}

function syncTable() {
    tableFeatures = [];
    featureLayer.eachLayer(function(layer) {
        layer.feature.properties.leaflet_stamp = L.stamp(layer);
        if (map.hasLayer(featureLayer)) {
            if (map.getBounds().contains(layer.getBounds())) {
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


function identifyFieldFeature(id) {
    var featureProperties = fieldfeatureLayer.getLayer(id).feature.properties;
    var content = "<table class='table table-striped table-bordered table-condensed'>";
    $.each(featureProperties, function(key, value) {
        if (!value) {
            value = "";
        }
        if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
            value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
        }
        $.each(fieldproperties, function(index, property) {
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

function identifyFeature(id) {
    var featureProperties = featureLayer.getLayer(id).feature.properties;
    var content = "<table class='table table-striped table-bordered table-condensed'>";
    $.each(featureProperties, function(key, value) {
        if (!value) {
            value = "";
        }
        if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
            value = "<a href='" + value + "' target='_blank'>" + value + "</a>";
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

$("#view-sql-btn").click(function() {
    alert($("#query-builder").queryBuilder("getSQL", false, false).sql);
});

$("#apply-filter-btn").click(function() {
    applyFilter();
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


$("#chartModal").on("shown.bs.modal", function(e) {
    drawCharts();
});
