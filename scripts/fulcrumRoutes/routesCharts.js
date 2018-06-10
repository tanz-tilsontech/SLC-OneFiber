function drawRouteCharts() {
  // HUB COMPLETE
  $(function() {
    var result = alasql("SELECT hub AS label, COUNT(NULLIF(cable_placement_total_footage_cx_final::NUMBER,0)) AS total FROM ? GROUP BY hub", [features]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#route-hub-complete-chart",
        data: {
          type: "gauge",
          columns: columns
        }
    });
  });

  // HUB TOTAL FOOTAGE
  $(function() {
    var result = alasql("SELECT hub AS label, SUM(COALESCE(cable_placement_total_footage_cx_final::NUMBER)) AS footage FROM ? GROUP BY hub", [features]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.footage]];
    });
    var chart = c3.generate({
        bindto: "#route-hub-footage-chart",
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
    var result = alasql("SELECT status AS label, COUNT(status) AS total FROM ? GROUP BY status", [features]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#route-hub-status-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}


$("#chartModal").on("shown.bs.modal", function (e) {
  drawCharts();
});