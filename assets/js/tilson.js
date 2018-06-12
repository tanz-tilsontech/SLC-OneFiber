verifyUser();

function verifyUser() {
  var owner = "tilson"
  if (sessionStorage.getItem("fulcrum_useremail") === null || sessionStorage.getItem("fulcrum_useremail").indexOf(owner) === -1) {
    $("#table-container").hide();
    $("#resto-table-container").hide();
    $("#fiber-table-container").hide();
    $("#fiberRoute-table-container").hide();
    $("#map-container").hide();
    $("#legend-btn").hide();
    $("#refresh-btn").hide();
    $(".navbar-collapse").css("opacity", "0");
    window.confirm
    if (window.confirm('Click OK to go to Login Page')) {
      window.location.href='https://tanz-tilsontech.github.io/SLC-OneFiber/index.html';
    };
  };
};

$(document).ready(function() {
  $("#introModal").modal("show");
});


// Configuration of Routes in Fulcrum

var config = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Routes",
  hoverProperty: "status_title_github",
  sortProperty: "fqnid",
  sortOrder: "ascend",
};


// Configuration of Restoration in Fulcrum

var config1 = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson?child=restoration_repeat",
  layerName: "Restoration",
  hoverProperty: "restoration_items",
  sortProperty: "date_resto",
  sortOrder: "ascend",
};


// Configuration of Fiber Cable in 3GIS

var config2 = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/7/query?where=fqn_id+IS+NOT+NULL&outFields=*&f=geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Fiber Cable",
  hoverProperty: "fqn_id",
  sortProperty: "fqn_id",
  sortOrder: "ascend",
};


// Configuration of Fiber Route in 3GIS

var config3 = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/60/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "Fiber Route",
  hoverProperty: "cablename",
  sortProperty: "fibercount",
  sortOrder: "ascend",
};


// Configuration of Splice Closures in 3GIS

var config4 = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/1/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "Splice Closures",
  hoverProperty: "fqn_id",
  sortProperty: "splicecount",
  sortOrder: "ascend",
};


// Configuration of Cluster Rings in 3GIS

var config5 = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/10/query?where=fqn_id+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "3GIS Routes",
  hoverProperty: "fqn_id"
};



// Properties of Routes in Fulcrum

var properties = [{
  value: "prints",
  label: "Prints",
  table: {
    visible: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fulcrum_record_link",
  label: "Fulcrum Record",
  table: {
    visible: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fulcrum_id",
  label: "Record ID",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "gps_directions_1",
  label: "GPS Directions",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
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
    input: "radio",
    vertical: false,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fqnid",
  label: "Route FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "text",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "fiber_fqnid_1",
  label: "Fiber FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "text",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
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
  value: "construction_start_date_final",
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
  value: "construction_complete_date_final",
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
  value: "inspector_name_cx",
  label: "Construction Inspector",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "construction_footage_final",
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
  value: "cable_placement_start_date_final",
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
  value: "cable_placement_complete_date_final",
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
  value: "inspector_name_cp",
  label: "Cable Placement Inspector",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "cable_placement_total_footage_final",
  label: "Cable Placement Total Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
  },
}];



// Properties of Restoration in Fulcrum

var properties1 = [{
  value: "fulcrum_record_resto",
  label: "Fulcrum Record",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "inspector_resto",
  label: "Inspector",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "contractor_resto",
  label: "Contractor",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "wpid_resto",
  label: "WPID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fiber_fqnid_resto",
  label: "Fiber FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "route_fqnid_resto",
  label: "Route FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "site_nfid_resto",
  label: "Site NFID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "restoration_items",
  label: "Restoration Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
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
  value: "restoration_complete_tilson",
  label: "Restoration Complete",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
}];



// Properties of Fiber Cable in 3GIS

var properties2 = [{
  value: "workorderid",
  label: "WPID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fqn_id",
  label: "Fiber FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "cabletype",
  label: "Cable Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fibercount",
  label: "Strand Count",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "calculatedlength",
  label: "Engineered Length",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "oofstatus",
  label: "Status",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "oofdateindesign",
  label: "In Design",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["begins_with"],
    values: []
  }
},
{
  value: "oofdatepermitsubmitted",
  label: "Permit Submitted",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["begins_with"],
    values: []
  }
},
{
  value: "oofdatepermitreceived",
  label: "Permit Received",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["begins_with"],
    values: []
  }
},
{
  value: "oofdatecableplaced",
  label: "Cable Placed",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["begins_with"],
    values: []
  }
},
{
  value: "oofdatesplicedandtested",
  label: "Spliced/Tested",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["begins_with"],
    values: []
  }
}];



// Properties of Fiber Route in 3GIS

var properties3 = [{
  value: "cablename",
  label: "Cable Name",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fibercount",
  label: "Fiber Strands",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "buildtype",
  label: "Build Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "longleadpermit",
  label: "Long Lead Permit",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "hubname",
  label: "Hub",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "calculatedlength",
  label: "Engineered Length",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
}];


// Properties of Fiber Route in 3GIS

var properties4 = [{
  value: "splice_name",
  label: "Splice Name",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "workorderid",
  label: "WPID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "splicetype",
  label: "Splice Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fqn_id",
  label: "Splice FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "c500spliceloose",
  label: "Loose Tube",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "c510spliceribbon",
  label: "Ribbon",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "fibercable_fqnid",
  label: "Fiber 1 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "cable_fqnid_2",
  label: "Fiber 2 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "cable_fqnid_3",
  label: "Fiber 3 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "cable_fqnid_4",
  label: "Fiber 4 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "cable_fqnid_5",
  label: "Fiber 5 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "cable_fqnid_6",
  label: "Fiber 6 FQNID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "splicingcomplete",
  label: "Splice Complete",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
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
    input: "radio",
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
    input: "radio",
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
    input: "radio",
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
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
}];


var restoAfterProps = [{
  value: "dirt_resto_a_cx_url",
  label: "Dirt",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "concrete_resto_a_cx_url",
  label: "Concrete",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "asphalt_resto_a_cx_url",
  label: "Asphalt",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "start_handhole_resto_a_cx_url",
  label: "Start Handhole",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["in", "not_in", "equal", "not_equal"],
    values: []
  }
},
{
  value: "end_handhole_resto_a_cx_url",
  label: "End Handhole",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
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


var featureCable = [{
  value: "cable_start_location_cp_url",
  label: "Cable Coil (Start Handhole)",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "cable_tag_start_location_cp_url",
  label: "Cable Tag (Start Handhole)",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "cable_end_location_cp_url",
  label: "Cable Coil (End Handhole)",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "cable_tag_end_location_cp_url",
  label: "Cable Tag (End Handhole)",
  table: {
    visible: false,
    sortable: false
  }
}];


var hardscapePictures = [{
  value: "hardscape_cx_url",
  label: "Pipe Hardscape",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "photos_hardscape_url",
  label: "Additional Hardscape",
  table: {
    visible: false,
    sortable: false
  }
}];


var cxSignatures = [{
  value: "contractor_signature_construction_pass_url",
  label: "Contractor",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "qc_signature_construction_pass_url",
  label: "Inspector",
  table: {
    visible: false,
    sortable: false
  }
}];


var cpSignatures = [{
  value: "contractor_signature_cable_placement_pass_url",
  label: "Contractor",
  table: {
    visible: false,
    sortable: false
  }
},
{
  value: "qc_signature_cable_placement_pass_url",
  label: "Inspector",
  table: {
    visible: false,
    sortable: false
  }
}];



function drawCharts() {
  // HUB COMPLETE
  $(function() {
    var result = alasql("SELECT hub AS label, COUNT(NULLIF(cable_placement_total_footage_final::NUMBER,0)) AS total FROM ? GROUP BY hub", [features]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
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
    var result = alasql("SELECT hub AS label, SUM(COALESCE(cable_placement_total_footage_final::NUMBER)) AS footage FROM ? GROUP BY hub", [features]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.footage]];
    });
    var chart = c3.generate({
        bindto: "#hub-footage-chart",
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
        bindto: "#hub-status-chart",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}


function drawRestoCharts() {
  // TILSON COMPLETED 
  $(function() {
    var result = alasql("SELECT restoration_complete_tilson AS label, COUNT(restoration_complete_tilson) AS total FROM ? GROUP BY restoration_complete_tilson", [features1]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#resto-tilson-completed",
        data: {
          type: "pie",
          columns: columns
        }
    });
  });
}


function drawFiberSegmentCharts() {
 // STATUS MILES
  $(function() {
    var result = alasql("SELECT oofstatus AS label, SUM(COALESCE(calculatedlength::NUMBER)/5280) AS miles FROM ? GROUP BY oofstatus", [features2]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.miles]];
    });
    var chart = c3.generate({
        bindto: "#fiber-footage-chart",
        data: {
          type: "bar",
          columns: columns
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Cable Miles"]
          }
        }
    });
  });

  // STATUS COMPLETED 
  $(function() {
    var result = alasql("SELECT oofstatus AS label, COUNT(oofstatus) AS total FROM ? GROUP BY oofstatus", [features2]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#fiber-status-chart",
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
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature(row.leaflet_stamp);
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer.getLayer(row.leaflet_stamp).toGeoJSON());
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

  buildRoutesFilter();
  buildRoutesTable();
}


function buildRestoConfig() {
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
        var layer = featureLayer1.getLayer(row.leaflet_stamp);
        map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer1.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature1(row.leaflet_stamp);
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer1.getLayer(row.leaflet_stamp).toGeoJSON());
      }
    }
  }];

  $.each(properties1, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson1.features], function(results){
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

  buildRestoFilter();
  buildRestoTable();
}


function buildFiberConfig() {
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
    }
  }];

  $.each(properties2, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson2.features], function(results){
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

  buildFiberFilter();
  buildFiberTable();
}



function buildFiberRouteConfig() {
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
        var layer = featureLayer3.getLayer(row.leaflet_stamp);
        map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer3.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature3(row.leaflet_stamp);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer3.getLayer(row.leaflet_stamp).toGeoJSON());
      }
    }
  }];

  $.each(properties3, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson3.features], function(results){
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

  buildFiberRouteFilter();
  buildFiberRouteTable();
}


function buildSpliceConfig() {
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
        var layer = featureLayer4.getLayer(row.leaflet_stamp);
        map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer4.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature4(row.leaflet_stamp);
        highlightLayer.clearLayers();
        highlightLayer.addData(featureLayer4.getLayer(row.leaflet_stamp).toGeoJSON());
      }
    }
  }];

  $.each(properties4, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson4.features], function(results){
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

  buildSpliceFilter();
  buildSpliceTable();
}

function buildGISRoutesConfig() {
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
        var layer = featureLayer5.getLayer(row.leaflet_stamp);
        map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer5.getLayer(row.leaflet_stamp).toGeoJSON());
      },
      "click .identify": function (e, value, row, index) {
        identifyFeature5(row.leaflet_stamp);
        highlightLayer2.clearLayers();
        highlightLayer2.addData(featureLayer5.getLayer(row.leaflet_stamp).toGeoJSON());
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [geojson5.features], function(results){
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

  buildGISRoutesFilter();
  buildGISRoutesTable();
}



// Basemap Layers
var mapboxOSM = L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvdHJ1c3QiLCJhIjoibGo4TG5nOCJ9.QJnT2dgjL4_4EA7WlK8Zkw', {
    maxZoom: 20
});


var mapboxSat = L.tileLayer('https://api.mapbox.com/v4/cfritz1387.573ca1ee/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZyaXR6MTM4NyIsImEiOiJjaWphZTZ0eHkwMDVwdWlseGx5aWhhbXlwIn0._lgb3vbGMSx1-jdZCufdgg', {
    maxZoom: 20
});


var SLCLLDRoute = L.tileLayer('http://ttm-tileify-proxy.herokuapp.com/tiles/{z}/{x}/{y}?url=https%3A%2F%2Ftilsonwebdraco.3-gislive.com%2Farcgis%2Frest%2Fservices%2FSLClld%2FTilsonslc_lld%2FMapServer&transparent=true&layers=show%3A3%2C10%2C31%2C44%2C47%2C49', {
    maxZoom: 20
});


var highlightLayer = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 7,
      color: "#FFF",
      weight: 6,
      opacity: 1,
      fillColor: "#ff0000",
      fillOpacity: 1,
      clickable: false
    });
  },
  style: function (feature) {
    return {
      color: "#242424",
      weight: 6,
      opacity: 1,
      fillColor: "#242424",
      fillOpacity: 1,
      clickable: false
    };
  }
});


var highlightLayer2 = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 7,
      color: "#FFF",
      weight: 3,
      opacity: 1,
      fillColor: "#ff0000",
      fillOpacity: 1,
      clickable: false
    });
  },
  style: function (feature) {
    return {
      color: "#ff0000",
      weight: 3,
      opacity: 1,
      clickable: false
    };
  }
});


var highlightLayer3 = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#ff0000",
      weight: 6,
      opacity: 1,
      fillOpacity: 0.1,
      clickable: false
    };
  }
});

var highlightLayer4 = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "#ff0000",
      weight: 3,
      opacity: 1,
      fillOpacity: 1,
      clickable: false
    };
  }
});




var featureLayer = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.contractor != "Tilson") {
      return true;
    };
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
          featureHardscapePics(L.stamp(layer));
          featureCXSignaturePics(L.stamp(layer));
          featureCPSignaturePics(L.stamp(layer));
          featureCablePics(L.stamp(layer));
          highlightLayer2.clearLayers();
          highlightLayer2.addData(featureLayer.getLayer(L.stamp(layer)).toGeoJSON());
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
          RestoAfterPics(L.stamp(layer));
          highlightLayer2.clearLayers();
          highlightLayer2.addData(featureLayer1.getLayer(L.stamp(layer)).toGeoJSON());
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
      if (feature.properties.restoration_complete_tilson === "Yes") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/markers/b3b3b3.png",
            iconSize: [30, 40],
            iconAnchor: [15, 32]
          })
        );
      }
    }
  }
});




var featureLayer2 = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.oofstatus === "Cable Placed" || feature.properties.oofstatus === "Construction Underway" || feature.properties.oofstatus === "Permits Received" ||feature.properties.oofstatus === "Permits Submitted" || feature.properties.oofstatus === "In Design") {
      return true;
    };
  },
  style: function (feature, layer) {
    if (feature.properties.oofstatus === "Cable Placed") {
      return {
        color: "#2AE100",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.oofstatus === "Construction Underway") {
      return {
        color: "#FF1ED9",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.oofstatus === "Permits Received") {
      return { 
        color: "#F47200",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.oofstatus === "Permits Submitted") {
      return {
        color: "#1BE8F3",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.oofstatus === "In Design") {
      return {
        color: "#828282",
        weight: 6,
        opacity: 0.7
      };
    }
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature2(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer2.getLayer(L.stamp(layer)).toGeoJSON());
          $(".info-control").html(feature.properties[config2.hoverProperty]);
          $(".info-control").show();
        },
        mouseover: function (e) {
          if (config2.hoverProperty) {
            $(".info-control").html(feature.properties[config2.hoverProperty]);
            $(".info-control").show();
          }
        },
        dblclick: function (e) {
          highlightLayer.clearLayers();
        }
      });
    }
  }
});


var featureLayer3 = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "black",
      opacity: 0.7,
      weight: 6
    };
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature3(L.stamp(layer));
          highlightLayer4.clearLayers();
          highlightLayer4.addData(featureLayer3.getLayer(L.stamp(layer)).toGeoJSON());
          $(".info-control").html(feature.properties[config3.hoverProperty]);
          $(".info-control").show();
        },
        mouseover: function (e) {
          if (config3.hoverProperty) {
            $(".info-control").html(feature.properties[config3.hoverProperty]);
            $(".info-control").show();
          }
        },
        dblclick: function (e) {
          highlightLayer4.clearLayers();
        }
      });
    }
  }
});



var featureLayer4 = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.splicetype === "MCA" || feature.properties.splicetype === "Reel End") {
      return true;
    };
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature4(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer4.getLayer(L.stamp(layer)).toGeoJSON());
          $(".info-control").html(feature.properties[config4.hoverProperty]);
          $(".info-control").show();
        },
        mouseover: function (e) {
          if (config4.hoverProperty) {
            $(".info-control").html(feature.properties[config4.hoverProperty]);
            $(".info-control").show();
          }
        },
        dblclick: function (e) {
          highlightLayer.clearLayers();
        }
      });
      if (feature.properties.splicetype === "MCA") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/MCA.png",
            iconSize: [20, 30],
            iconAnchor: [5, 12]
          })
        );
      } else if (feature.properties.splicetype === "Reel End" && (feature.properties.c510spliceribbon === 864 || feature.properties.c500spliceloose === 864)) {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/Reel-End2.png",
            iconSize: [20, 30],
            iconAnchor: [5, 12]
          })
        );
      } else if (feature.properties.splicetype === "Reel End") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/Reel-End.png",
            iconSize: [20, 30],
            iconAnchor: [5, 12]
          })
        );
      }
    } 
  }
});



var featureLayer5 = L.geoJson(null, {
  style: function (feature, layer) {
    if (feature.properties.cableplaced !== null || feature.properties.cableplaced !== '') {
      return {
        color: "#2AE100",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.constructionstart !== null || feature.properties.constructionstart !== '') {
      return {
        color: "#FF1ED9",
        weight: 6,
        opacity: 0.7
      };
    }
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          identifyFeature5(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(featureLayer5.getLayer(L.stamp(layer)).toGeoJSON());
          $(".info-control").html(feature.properties[config5.hoverProperty]);
          $(".info-control").show();
        },
        mouseover: function (e) {
          if (config5.hoverProperty) {
            $(".info-control").html(feature.properties[config5.hoverProperty]);
            $(".info-control").show();
          }
        },
        dblclick: function (e) {
          highlightLayer.clearLayers();
        }
      });
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
});


// Fetch the Restoration GeoJSON file

$.getJSON(config1.geojson, function (data) {
  geojson1 = data
  features1 = $.map(geojson1.features, function(feature) {
    return feature.properties;
  });
  featureLayer1.addData(data);
  buildRestoConfig();
  $("#loading-mask").hide();
});


// Fetch the Fiber Cable GeoJSON file

$.getJSON(config2.geojson, function (data) {
  geojson2 = data
  features2 = $.map(geojson2.features, function(feature) {
    return feature.properties;
  });
  featureLayer2.addData(data);
  buildFiberConfig();
  $("#loading-mask").hide();
});


// Fetch the FiberRoute Cable GeoJSON file

$.getJSON(config3.geojson, function (data) {
  geojson3 = data
  features3 = $.map(geojson3.features, function(feature) {
    return feature.properties;
  });
  featureLayer3.addData(data);
  buildFiberRouteConfig();
  $("#loading-mask").hide();
});



// Fetch the Splice Closure GeoJSON file

$.getJSON(config4.geojson, function (data) {
  geojson4 = data
  features4 = $.map(geojson4.features, function(feature) {
    return feature.properties;
  });
  featureLayer4.addData(data);
  buildSpliceConfig();
  $("#loading-mask").hide();
});


// Fetch the 3GIS Routes GeoJSON file

$.getJSON(config5.geojson, function (data) {
  geojson5 = data
  features5 = $.map(geojson5.features, function(feature) {
    return feature.properties;
  });
  featureLayer5.addData(data);
  buildGISRoutesConfig();
  $("#loading-mask").hide();
});



var map = L.map("map", {
  layers: [mapboxOSM, SLCLLDRoute, featureLayer, featureLayer1, featureLayer5, featureLayer2, featureLayer3, featureLayer4, highlightLayer, highlightLayer2, highlightLayer3, highlightLayer4]
}).fitWorld();


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
  "<span id='layer-name'>Fulcrum Routes</span>": featureLayer,
  "<span id='layer-name1'>Fulcrum Resto</span>": featureLayer1,
  "<span id='layer-name3'>3GIS Segments</span>": featureLayer2,
  "<span id='layer-name4'>3GIS Sections</span>": featureLayer3,
  "<span id='layer-name5'>3GIS Splices</span>": featureLayer4,
  "<span id='layer-name6'>3GIS Routes</span>": featureLayer5,
  "<span id='layer-name2'>3GIS Sites</span>": SLCLLDRoute,
};


var layerControl = L.control.layers(baseLayers, overlayLayers, {
  collapsed: isCollapsed
}).addTo(map);

// Filter table to only show features in current map bounds
map.on("moveend", function (e) {
  syncRoutesTable();
  syncRestoTable();
});

map.on("click", function(e) {
  highlightLayer.clearLayers();
  highlightLayer2.clearLayers();
  highlightLayer3.clearLayers();
  highlightLayer4.clearLayers();
});

// Table formatter to make links clickable
function urlFormatter (value, row, index) {
  if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
    return "<a href='"+value+"' target='_blank'>"+value+"</a>";
  }
}


function buildRoutesFilter() {
  $("#routesFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function buildRestoFilter() {
  $("#restoFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function buildFiberFilter() {
  $("#fiberFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function buildFiberRouteFilter() {
  $("#fiberRouteFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function buildSpliceFilter() {
  $("#spliceFilter").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function buildGISRoutesFilter() {
  $("#GISRoutesFilter").queryBuilder({
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
    map.fitBounds(featureLayer.getBounds());
  });
}

function applyRestoFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#restoFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson1.features], function(features){
    featureLayer1.clearLayers();
    featureLayer1.addData(features);
    syncRestoTable();
    map.fitBounds(featureLayer1.getBounds());
  });
}

function applyFiberFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#fiberFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson2.features], function(features){
    featureLayer2.clearLayers();
    featureLayer2.addData(features);
    syncFiberTable();
    map.fitBounds(featureLayer2.getBounds());
  });
}

function applyFiberRouteFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#fiberRouteFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson3.features], function(features){
    featureLayer3.clearLayers();
    featureLayer3.addData(features);
    syncFiberRouteTable();
    map.fitBounds(featureLayer3.getBounds());
  });
}

function applySpliceFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#spliceFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson4.features], function(features){
    featureLayer4.clearLayers();
    featureLayer4.addData(features);
    syncSpliceTable();
    map.fitBounds(featureLayer4.getBounds());
  });
}

function applyGISRoutesFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#GISRoutesFilter").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [geojson5.features], function(features){
    featureLayer5.clearLayers();
    featureLayer5.addData(features);
    syncGISRoutesTable();
    map.fitBounds(featureLayer5.getBounds());
  });
}



function buildRoutesTable() {
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

function buildRestoTable() {
  $("#restoTable").bootstrapTable({
    cache: false,
    height: $("#resto-table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config1.sortProperty,
    sortOrder: config1.sortOrder,
    toolbar: "#resto-toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table,
    onClickRow: function(row, $element) {
      var layer = featureLayer1.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer1.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      identifyFeature1(row.leaflet_stamp);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer1.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(featureLayer1.getBounds());

  $(window).resize(function () {
    $("#restoTable").bootstrapTable("resetView", {
      height: $("#resto-table-container").height()
    });
  });
}

function buildFiberTable() {
  $("#fiberTable").bootstrapTable({
    cache: false,
    height: $("#fiber-table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config2.sortProperty,
    sortOrder: config2.sortOrder,
    toolbar: "#fiber-toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table
  });

  $(window).resize(function () {
    $("#fiberTable").bootstrapTable("resetView", {
      height: $("#fiber-table-container").height()
    });
  });
}

function buildFiberRouteTable() {
  $("#fiberRouteTable").bootstrapTable({
    cache: false,
    height: $("#fiberRoute-table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config3.sortProperty,
    sortOrder: config3.sortOrder,
    toolbar: "#fiberRoute-toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table
  });

  $(window).resize(function () {
    $("#fiberRouteTable").bootstrapTable("resetView", {
      height: $("#fiberRoute-table-container").height()
    });
  });
}

function buildSpliceTable() {
  $("#spliceTable").bootstrapTable({
    cache: false,
    height: $("#splice-table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config4.sortProperty,
    sortOrder: config4.sortOrder,
    toolbar: "#splice-toolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table
  });

  $(window).resize(function () {
    $("#spliceTable").bootstrapTable("resetView", {
      height: $("#slice-table-container").height()
    });
  });
}

function buildGISRoutesTable() {
  $("#GISRoutesTable").bootstrapTable({
    cache: false,
    height: $("#GISRoutes-table-container").height(),
    undefinedText: "",
    striped: false,
    pagination: false,
    minimumCountColumns: 1,
    sortName: config.sortProperty,
    sortOrder: config.sortOrder,
    toolbar: "#GISRoutesToolbar",
    search: true,
    trimOnSearch: false,
    showColumns: true,
    showToggle: true,
    columns: table,
    onClickRow: function(row, $element) {
      var layer = featureLayer5.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer5.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      identifyFeature5(row.leaflet_stamp);
      highlightLayer.clearLayers();
      highlightLayer.addData(featureLayer5.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(featureLayer5.getBounds());

  $(window).resize(function () {
    $("#GISRoutesTable").bootstrapTable("resetView", {
      height: $("#GISRoutes-table-container").height()
    });
  });
}



function syncRoutesTable() {
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

function syncRestoTable() {
  tableFeatures = [];
  featureLayer1.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(featureLayer1)) {
      featureLayer1.getLayer()
      layer.feature.geometry.type === "Point"
      if (map.getBounds().contains(layer.getLatLng())) {
        tableFeatures.push(layer.feature.properties);
      }
    }
  });
  $("#restoTable").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#restoTable").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#resto-feature-count").html($("#restoTable").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#resto-feature-count").html($("#restoTable").bootstrapTable("getData").length + " visible features");
  }
}

function syncFiberTable() {
  tableFeatures = [];
  featureLayer2.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
  });
  $("#fiberTable").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#fiberTable").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#fiber-feature-count").html($("#fiberTable").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#fiber-feature-count").html($("#fiberTable").bootstrapTable("getData").length + " visible features");
  }
}


function syncFiberRouteTable() {
  tableFeatures = [];
  featureLayer3.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
  });
  $("#fiberRouteTable").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#fiberRouteTable").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#fiberRoute-feature-count").html($("#fiberRouteTable").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#fiberRoute-feature-count").html($("#fiberRouteTable").bootstrapTable("getData").length + " visible features");
  }
}


function syncSpliceTable() {
  tableFeatures = [];
  featureLayer4.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
  });
  $("#spliceTable").bootstrapTable("load", JSON.parse(JSON.stringify(tableFeatures)));
  var featureCount = $("#spliceTable").bootstrapTable("getData").length;
  if (featureCount == 1) {
    $("#splice-feature-count").html($("#spliceTable").bootstrapTable("getData").length + " visible feature");
  } else {
    $("#splice-feature-count").html($("#spliceTable").bootstrapTable("getData").length + " visible features");
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
    if (typeof value == "string"  && value.indexOf("https://tilson.egnyte") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Prints" + "</a>";
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
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
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


function identifyFeature2(id) {
  var featureProperties = featureLayer2.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(properties2, function(index, property) {
      if (key == property.value) {
        if (value && property.filter.value == "date") {
          date = new Date(value);
          value = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        }
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info2").html(content);
  $("#feature2Modal").modal("show");
};

function identifyFeature3(id) {
  var featureProperties = featureLayer3.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(properties3, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info3").html(content);
  $("#feature3Modal").modal("show");
};

function identifyFeature4(id) {
  var featureProperties = featureLayer4.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(properties4, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#feature-info4").html(content);
  $("#feature4Modal").modal("show");
};

function identifyFeature5(id) {
  var featureProperties = featureLayer5.getLayer(id).feature.properties;
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
    if (typeof value == "string"  && value.indexOf("https://tilson.egnyte") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Prints" + "</a>";
    }
    $.each(properties5, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#GISRoutes-feature-info").html(content);
  $("#GISRoutes-feature-modal").modal("show");
}



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


function RestoAfterPics(id) {
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
    $.each(restoAfterProps, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#restoAfter").html(content);
};








$("#featurePictures").click(function() {
  $("#featuresPicturesModal").modal("show");
  return false;
});


function featureHardscapePics(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos/";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(hardscapePictures, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#hardscapePic").html(content);
};

function featureCablePics(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos/";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(featureCable, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fibercablePic").html(content);
};



$("#featureSignatures").click(function() {
  $("#featuresSignaturesModal").modal("show");
  return false;
});


function featureCXSignaturePics(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='signatureGallery(\""+ value +"\")'; return false;'>View Signatures</a>";
    }
    $.each(cxSignatures, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#cxsigs").html(content);
};


function featureCPSignaturePics(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='signatureGallery(\""+ value +"\")'; return false;'>View Signatures</a>";
    }
    $.each(cpSignatures, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#cpsigs").html(content);
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


function signatureGallery(photos) {
  var photoArray = [];
  var photoIDs = photos.split("signatures=")[1];
  $.each(photoIDs.split("%2C"), function(index, id) {
    photoArray.push({href: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures/" + id});
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



function switchView(view) {
  if (view == "split") {
    $("#view").html("Split View");
    location.hash = "#split";
    $("#table-container").show();
    $("#table-container").css("height", "55%");
    $("#map-container").show();
    $("#map-container").css("height", "45%");
    $("#resto-table-container").hide();
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
    $("#resto-table-container").hide();
    if (map) {
      map.invalidateSize();
    }
  } else if (view == "table") {
    $("#view").html("Table View");
    location.hash = "#table";
    $("#table-container").show();
    $("#table-container").css("height", "100%");
    $("#map-container").hide();
    $("#resto-table-container").hide();
    $(window).resize();
  } else if (view == "restoTable") {
    $("#view").html("Table View");
    location.hash = "#table";
    $("#resto-table-container").show();
    $("#resto-table-container").css("height", "100%");
    $("#map-container").hide();
    $("#table-container").hide();
    $(window).resize();
  } else if (view == "restoSplit") {
    $("#view").html("Split View");
    location.hash = "#split";
    $("#resto-table-container").show();
    $("#resto-table-container").css("height", "55%");
    $("#map-container").show();
    $("#map-container").css("height", "45%");
    $("#table-container").hide();
    $(window).resize();
    if (map) {
      map.invalidateSize();
    }
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
  } else if (this.id === "resto-graph-only") {
    switchView("restoTable");
    return false;
  } else if (this.id === "resto-map-graph") {
    switchView("restoSplit");
    return false;
  }
});



L.easyPrint({
  title: 'Print',
  elementsToHide: 'p, h2, .gitButton'
}).addTo(map)



$("#refresh-btn").click(function() {
  featureLayer.clearLayers();
  featureLayer1.clearLayers();
  featureLayer2.clearLayers();
  featureLayer3.clearLayers();
  featureLayer4.clearLayers();
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
  $.getJSON(config3.geojson, function (data) {
    geojson3 = data
    features3 = $.map(geojson3.features, function(feature) {
      return feature.properties;
    });
    featureLayer3.addData(data);
    $("#loading-mask").hide();
  });
  $.getJSON(config4.geojson, function (data) {
    geojson4 = data
    features4 = $.map(geojson4.features, function(feature) {
      return feature.properties;
    });
    featureLayer4.addData(data);
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
  syncFiberRouteTable();
  buildFiberRouteTable();
  buildFiberRouteFilter();
  syncSpliceTable();
  buildSpliceTable();
  buildSpliceFilter();
  map.fitBounds(featureLayer.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#about-btn").click(function() {
  $("#introModal").modal("show");
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

$("#fiberRoute-filter-btn").click(function() {
  $("#FiberRoutefilterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#splice-filter-btn").click(function() {
  $("#SplicefilterModal").modal("show");
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

$("#fiberSegement-chart-btn").click(function() {
  $("#FiberSegmentchartModal").modal("show");
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

$("#fiberRoute-apply-filter-btn").click(function() {
  applyFiberRouteFilter();
  $('#FiberRoutefilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#splice-apply-filter-btn").click(function() {
  applySpliceFilter();
  $('#SplicefilterModal').modal('hide');
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

$("#fiber-reset-filter-btn").click(function() {
  $("#fiberFilter").queryBuilder("reset");
  applyFiberFilter();
  $('#FiberfilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#fiberRoute-reset-filter-btn").click(function() {
  $("#fiberRouteFilter").queryBuilder("reset");
  applyFiberRouteFilter();
  $('#FiberRoutefilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#splice-reset-filter-btn").click(function() {
  $("#spliceFilter").queryBuilder("reset");
  applySpliceFilter();
  $('#SplicefilterModal').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#filter-reset-all-btn").click(function() {
  $("#routesFilter").queryBuilder("reset");
  applyRoutesFilter();
  $("#restoFilter").queryBuilder("reset");
  applyRestoFilter();
  $("#fiberFilter").queryBuilder("reset");
  applyFiberFilter();
  $("#fiberRouteFilter").queryBuilder("reset");
  applyFiberRouteFilter();
  $("#spliceFilter").queryBuilder("reset");
  applySpliceFilter();
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

$("#FiberSegmentchartModal").on("shown.bs.modal", function (e) {
  drawFiberSegmentCharts();
});