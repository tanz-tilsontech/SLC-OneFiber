function buildRoutesTable() {
  $("#routesTable").bootstrapTable({
    cache: false,
    height: $("#routesTable-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: routes.sortProperty,
    sortOrder: routes.sortOrder,
    toolbar: "#routesToolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table,
    onClickRow: function(row, $element) {
      var layer = routesLayer.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightRoutesLayer.clearLayers();
      highlightRoutesLayer.addData(routesLayer.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      identifyFeature(row.leaflet_stamp);
      highlightRoutesLayer.clearLayers();
      highlightRoutesLayer.addData(routesLayer.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(routesLayer.getBounds());

  $(window).resize(function () {
    $("#routesTable").bootstrapTable("resetView", {
      height: $("#routesTable-container").height()
    });
  });
}


function syncRoutesTable() {
  tableFeatures = [];
  routesLayer.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(routesLayer)) {
      routesLayer.getLayer()
      layer.feature.geometry.type === "Point"
      if (map.getBounds().contains(layer.getLatLng())) {
        tableFeatures.push(layer.feature.properties);
      }
    }
  });
  $("#routesTable").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#routesTable").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#feature-count").html($("#routesTable").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#feature-count").html($("#routesTable").bootstrapTable("getData").length + " visible features");
  }
}