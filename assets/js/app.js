<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Tanner Anz">
    <title class="title">SLC OneFiber Construction</title>
    <link href='https://api.mapbox.com/mapbox.js/v2.2.3/mapbox.css' rel='stylesheet' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.21/c3.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.esri.geocoder/1.0.2/esri-leaflet-geocoder.css">
    <link rel='stylesheet' href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css'/>
    <link rel='stylesheet' href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css'/>
    <link rel="stylesheet" href="assets/vendor/jQuery-QueryBuilder/query-builder.default.min.css">
    <link rel="stylesheet" href="assets/vendor/leaflet/leaflet-print/dist/easyPrint.css">
    <link rel="stylesheet" href="assets/css/app.css">
    <link rel="icon" type="image/x-icon" href="assets/pictures/tilson%20icon.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-linear-measurement@0.0.1/sass/Leaflet.LinearMeasurement.scss">
    <link rel="stylesheet" href="https://ppete2.github.io/Leaflet.PolylineMeasure/Leaflet.PolylineMeasure.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.7/css/highcharts.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">

    <!--link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.12.2/mapbox-gl.css' rel='stylesheet' /-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="//oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div id="loading-mask" class="modal-backdrop">
      <div class="loading-indicator">
        <div class="progress progress-striped active">
          <div class="progress-bar progress-bar-info loading-bar"></div>
        </div>
      </div>
    </div>

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" name="title" id="navbar-title"><img src="assets/pictures/tilson-technology-management-squarelogo-1436356419088.png">SLC OneFiber Construction</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars fa-white"></i> <span id="view">Menu </span><b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a id="chart-btn" href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-bar-chart"></i> Data Charts</a></li>
                <li><a id="sites-btn" href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-table"></i> Site Completion</a></li>
                <li><a id="monthly-btn" href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-tasks"></i> Monthly Progress</a></li>
                <li><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-laptop"></i> <span id="view"> Page Views </span><b class="caret"></b></a>
                  <ul class="dropdown-submenu">
                    <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" name="view" id="map-graph"><i class="fa fa-th-large"></i> Split View</a></li>
                    <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" name="view" id="map-only"><i class="fa fa-globe"></i> Map View</a></li>
                    <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" name="view" id="graph-only"><i class="fa fa-table"></i> Table View</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-toggle" id="downloadDrop" href="#" role="button" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp;Download <b class="caret"></b></a>
                  <ul class="dropdown-submenu">
                    <li><a href="https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.kml" id="raw-kml-download" download="" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Raw KML</a></li>
                    <li><a href="https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/feed.kml" id="kml-feed-download" download="feed.kml" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;KML Feed</a></li>
                  </ul>
                <li class="hidden" id="legend-item">
                  <a href="#" id="legend-btn" data-toggle="collapse" data-target=".navbar-collapse.in" title="Show Legend"><i class="glyphicon glyphicon-list-alt"></i> Show Legend
                    <span class="hidden-xs">
                    </span>
                    <span class="visible-xs">
                      Show Legend
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li><a id="extent-btn" href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-arrows-alt"></i> Feature Extent</a></li>
            <li><a href="#" id="refresh-btn" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-refresh"></i>&nbsp;&nbsp;Refresh Now</a></li>
            <li class="hidden-md hidden-lg"><a id="filter-btn" href="#" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-filter"></i> Filter Data</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="map-container">
      <div id="map"></div>
    </div>

    <div id="table-container">
      <div id="toolbar" style="width: 400px;">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" data-toggle="modal" data-target="#filterModal">
            <i class="fa fa-filter"></i> Filter Data
          </button>
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-cloud-download"></i> Export Data <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#" id="download-csv-btn"><i class="fa fa-file-text-o"></i> CSV</a></li>
              <li><a href="#" id="download-excel-btn"><i class="fa fa-file-excel-o"></i> Excel</a></li>
              <li><a href="#" id="download-pdf-btn"><i class="fa fa-file-pdf-o"></i> PDF</a></li>
            </ul>
          </div>
        </div>
        <span id="feature-count" class="text-muted" style="padding-left: 15px;"></span>
      </div>
      <table id="table"></table>
    </div>

    <div class="modal fade" id="chartModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Charts</h4>
          </div>
          <div class="modal-body" style="overflow: auto;">
            <div role="tabpanel">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#hub-status-chart" aria-controls="reports" role="tab" data-toggle="tab">STATUS</a></li>
                <li role="presentation"><a href="#hub-complete-chart" aria-controls="charts" role="tab" data-toggle="tab">HUB COMPLETE</a></li>
                <li role="presentation"><a href="#hub-footage-chart" aria-controls="charts" role="tab" data-toggle="tab">HUB FOOTAGE</a></li>
                <!--li role="presentation"><a href="#species-chart" aria-controls="charts" role="tab" data-toggle="tab">Species</a></li-->
              </ul>
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="hub-status-chart"></div>
                <div role="tabpanel" class="tab-pane" id="hub-complete-chart"></div>
                <div role="tabpanel" class="tab-pane" id="hub-footage-chart"></div>
                <!--div role="tabpanel" class="tab-pane" id="species-chart"></div-->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="filterModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Filter Data<span id="record-count" class="badge pull-right" style="margin-right: 15px; margin-top: 2px;"></span></h4>
          </div>
          <div class="modal-body">
            <div id="query-builder"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" id="reset-filter-btn"><i class="fa fa-undo"></i> Reset Filter</button>
            <button type="button" class="btn btn-primary" id="apply-filter-btn"><i class="fa fa-filter"></i> Apply Filter</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="featureModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Feature Info</h4>
          </div>
          <div class="modal-body" id="feature-info"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="legend-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-primary" id="legend-title">Legend</h4>
          </div>
          <div class="modal-body legend" id="legend"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="sites-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-primary" id="sites-title">SITE COMPLETION</h4>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div id="graphic1"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="monthly-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-primary" id="monthly-title">MONTHLY PROGRESS</h4>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <table id="graphic2"></table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!--script src="https://cdn.jsdelivr.net/leaflet.esri/2.0.0-beta.7/esri-leaflet.js"></script-->
    <!--script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script-->
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&use_slippy=true&libraries=places&key=AIzaSyBD-VYZnlbtRVWB7iFXDovJn4nIg7cQ-tI"></script>
    <script src='https://api.mapbox.com/mapbox.js/v2.2.3/mapbox.js'></script>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.21/c3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/leaflet.esri/1.0.0/esri-leaflet.js"></script>
    <script src="https://cdn.jsdelivr.net/leaflet.esri.geocoder/1.0.2/esri-leaflet-geocoder.js"></script>
    <script src="https://cdn.jsdelivr.net/alasql/0.2/alasql.min.js"></script>
    <script src="assets/vendor/jQuery-QueryBuilder/query-builder.standalone.min.js"></script>
    <script src="assets/vendor/tableExport/tableExport.min.js"></script>
    <script src="assets/vendor/tableExport/libs/FileSaver/FileSaver.min.js"></script>
    <script src="assets/vendor/tableExport/libs/html2canvas/html2canvas.min.js"></script>
    <script src="assets/vendor/tableExport/libs/jsPDF/jspdf.min.js"></script>
    <script src="assets/vendor/tableExport/libs/jsPDF-AutoTable/jspdf.plugin.autotable.js"></script>
    <script src="assets/vendor/leaflet/leaflet-print/dist/leaflet.easyPrint.js"></script>
    <script src="assets/js/leaflet-markercluster.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="assets/js/export.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/leaflet-linear-measurement@0.0.1/src/Leaflet.LinearMeasurement.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.2/tabletop.min.js"></script>
    <script src="https://ppete2.github.io/Leaflet.PolylineMeasure/Leaflet.PolylineMeasure.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.7/highcharts.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.7/highcharts-3d.js"></script>
    <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <!--script src="https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js"></script-->
   
  </body>
</html>
