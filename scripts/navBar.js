$("#refresh-btn").click(function() {
  featureLayer.clearLayers();
  featureLayer1.clearLayers();
  featureLayer2.clearLayers();
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
    geojson1 = data
    features1 = $.map(geojson1.features, function(feature) {
      return feature.properties;
    });
    featureLayer1.addData(data);
    $("#loading-mask").hide();
  });
  $.getJSON(config2.geojson, function (data) {
    geojson2 = data
    features2 = $.map(geojson2.features, function(feature) {
      return feature.properties;
    });
    featureLayer2.addData(data);
    $("#loading-mask").hide();
  });
  syncRoutesTable();
  buildRoutesTable();
  buildRoutesFilter();
  syncRestoTable();
  buildRestoTable();
  buildRestoFilter();
  syncFiberTable();
  buildFiberTable();
  buildFiberFilter();
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


$("#resto-filter-btn").click(function() {
  $("#RestofilterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fiber-filter-btn").click(function() {
  $("#FiberfilterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#chart-btn").click(function() {
  $("#chartModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#resto-chart-btn").click(function() {
  $("#RestochartModal").modal("show");
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
  alert($("#routesFilter").queryBuilder("getSQL", false, false).sql);
});

$("#apply-filter-btn").click(function() {
  applyRoutesFilter();
  $('#filterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#resto-apply-filter-btn").click(function() {
  applyRestoFilter();
  $('#RestofilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fiber-apply-filter-btn").click(function() {
  applyFiberFilter();
  $('#FiberfilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#reset-filter-btn").click(function() {
  $("#routesFilter").queryBuilder("reset");
  applyRoutesFilter();
  $('#filterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#resto-reset-filter-btn").click(function() {
  $("#restoFilter").queryBuilder("reset");
  applyRestoFilter();
  $('#RestofilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
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
    fileName: "DataMap_Routes_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-excel-btn").click(function() {
  $("#table").tableExport({
    headings: true,
    type: "excel",
    ignoreColumn: [0],
    fileName: "DataMap_Routes_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#download-pdf-btn").click(function() {
  $("#table").tableExport({
    type: "pdf",
    ignoreColumn: [0],
    fileName: "DataMap_Routes_"+ today +"",
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


$("#resto-download-csv-btn").click(function() {
  $("#restoTable").tableExport({
    headings: true,
    type: "csv",
    ignoreColumn: [0],
    fileName: "DataMap_Resto_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#resto-download-excel-btn").click(function() {
  $("#restoTable").tableExport({
    headings: true,
    type: "excel",
    ignoreColumn: [0],
    fileName: "DataMap_Resto_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#resto-download-pdf-btn").click(function() {
  $("#restoTable").tableExport({
    type: "pdf",
    ignoreColumn: [0],
    fileName: "DataMap_Resto_"+ today +"",
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

$("#fiber-download-csv-btn").click(function() {
  $("#fiberTable").tableExport({
    headings: true,
    type: "csv",
    ignoreColumn: [0],
    fileName: "DataMap_Fiber_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fiber-download-excel-btn").click(function() {
  $("#fiberTable").tableExport({
    headings: true,
    type: "excel",
    ignoreColumn: [0],
    fileName: "DataMap_Fiber_"+ today +""
  });
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fiber-download-pdf-btn").click(function() {
  $("#fiberTable").tableExport({
    type: "pdf",
    ignoreColumn: [0],
    fileName: "DataMap_Fiber_"+ today +"",
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

$("#RestochartModal").on("shown.bs.modal", function (e) {
  drawRestoCharts();
});