function buildRoutesFilter() {
  $("#routesFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}


function applyRoutesFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#routesFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson.features], function(features){
    featureLayer.clearLayers();
    featureLayer.addData(features);
    syncRoutesTable();
  });
}


