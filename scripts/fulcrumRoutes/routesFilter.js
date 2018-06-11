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
  alasql(query, [routes.features], function(features){
    routesLayer.clearLayers();
    routesLayer.addData(features);
    syncRoutesTable();
  });
}


