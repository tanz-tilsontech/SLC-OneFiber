function routesCharts() {
  // HUB COMPLETE
  $(function() {
    var result = alasql("SELECT hub AS label, COUNT(NULLIF(cable_placement_total_footage_cx_final::NUMBER,0)) AS total FROM ? GROUP BY hub", [routesFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#routes_complete_chart",
        data: {
          type: "gauge",
          columns: columns
        }
    });
  });

  // HUB TOTAL FOOTAGE
  $(function() {
    var result = alasql("SELECT hub AS label, SUM(COALESCE(cable_placement_total_footage_cx_final::NUMBER)) AS footage FROM ? GROUP BY hub", [routesFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.footage]];
    });
    var chart = c3.generate({
        bindto: "#routes_footage_chart",
        data: {
          type: "bar",
          columns: columns
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
    var result = alasql("SELECT status AS label, COUNT(status) AS total FROM ? GROUP BY status", [routesFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#routes_status_chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}


$("#routes_chart_modal").on("shown.bs.modal", function (e) {
  routesCharts();
});