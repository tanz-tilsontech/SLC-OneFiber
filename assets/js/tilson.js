
// VERIFY USER SIGN_IN

verifyUser();

function verifyUser() {
  var owner = "tilson"
  if (sessionStorage.getItem("fulcrum_useremail") === null || sessionStorage.getItem("fulcrum_useremail").indexOf(owner) === -1) {
    $("#map-container").hide();
    $("#about_BTN").hide();
    $("#refresh_BTN").hide();
    $(".navbar-collapse").css("opacity", "0");
    window.confirm
    if (window.confirm('Click OK to go to Login Page')) {
      window.location.href='https://tanz-tilsontech.github.io/SLC-OneFiber/index.html';
    };
  };
};




// SHOW ABOUT PAGE

$(document).ready(function() {
  $("#about_MODAL").modal("show");
});



// GIS DEMAND POINTS CONFIG

var gisDemandPointsConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/47/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "GIS Demand Points",
  hoverProperty: "site_name"
};


// GIS VES2K CONFIG

var gisVes2KConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/49/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "GIS VES2k",
  hoverProperty: "site_name"
};


// FULCRUM ROUTES CONFIG

var fulcrumRoutesConfig = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Routes",
  hoverProperty: "status_title_github",
  sortProperty: "fqnid",
  sortOrder: "ascend",
};


// FULCRUM RESTO CONFIG

var fulcrumRestoConfig = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson?child=restoration_repeat",
  layerName: "Restoration",
  hoverProperty: "restoration_items",
  sortProperty: "date_resto",
  sortOrder: "ascend",
};


// FULCRUM HARDSCAPE CONFIG

var fulcrumHardscapeConfig = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson?child=additional_hardscape_repeat",
  layerName: "Hadrscape",
  hoverProperty: "type_hardscape",
  sortProperty: "date_hardscape",
  sortOrder: "ascend",
};

// GIS STRUCTURES CONFIG

var gisStructuresConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/3/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "Structures",
  hoverProperty: "fqn_id",
  sortProperty: "fqn_id",
  sortOrder: "ascend",
};


// GIS ROUTES CONFIG

var gisRoutesConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/10/query?where=fqn_id+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "3GIS Routes",
  hoverProperty: "fqn_id"
};


// GIS SEGMENTS CONFIG

var gisSegmentsConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/7/query?where=fqn_id+IS+NOT+NULL&outFields=*&f=geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Fiber Cable",
  hoverProperty: "oofstatus",
  sortProperty: "fqn_id",
  sortOrder: "ascend",
};


// GIS SECTIONS CONFIG

var gisSectionsConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/60/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "Fiber Route",
  hoverProperty: "cablename",
  sortProperty: "fibercount",
  sortOrder: "ascend",
};


// GIS SPLICES CONFIG

var gisSplicesConfig = {
  geojson: "https://tilsonwebdraco.3-gislive.com/arcgis/rest/services/SLClld/Tilsonslc_lld/MapServer/1/query?where=objectid+IS+NOT+NULL&outFields=*&f=geojson",
  layerName: "Splice Closures",
  hoverProperty: "fqn_id",
  sortProperty: "splicecount",
  sortOrder: "ascend",
};


// DEMAND POINTS PROPERTIES

var gisDemandPointsProperties = [{
  value: "type",
  label: "Type",
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
  value: "tower_type ",
  label: "Tower Type",
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
  value: "carrier_sector_count ",
  label: "Sector Count",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal"],
    values: []
  }
},
{
  value: "city",
  label: "City",
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
  value: "workorderid",
  label: "Work Order ID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "clustername",
  label: "Cluster Name",
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
  value: "site_name",
  label: "Site Name",
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
  value: "nfid",
  label: "Site NFID",
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



// FULCRUM ROUTES PROPERTIES

var fulcrumRoutesProperties = [{
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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



// FULCRUM RESTO PROPERTIES

var fulcrumRestoProperties = [{
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
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
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



// FULCRUM HARDSCAPE PROPERTIES

var fulcrumHardscapeProperties = [{
  value: "fiber_fqnid_hardscape",
  label: "Segment FQNID",
  table: {
    visible: false,
    sortable: false
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
  value: "route_fqnid_hardscape",
  label: "Route FQNID",
  table: {
    visible: false,
    sortable: false
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
  value: "site_nfid_hardscape",
  label: "Site NFID",
  table: {
    visible: false,
    sortable: false
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
  value: "date_hardscape",
  label: "Date",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "date",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "type_hardscape",
  label: "Type",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    input: "radio",
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
},
{
  value: "footage_hardscape",
  label: "Footage",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "integer",
    vertical: true,
    multiple: true,
    operators: ["between"],
    values: []
  }
}];


// GIS STRUCTURES PROPERTIES

var gisStructuresProperties = [{
  value: "vaultsize",
  label: "Size",
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
  label: "Structure FQNID",
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
  value: "material",
  label: "Material",
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
  value: "slack_loop",
  label: "Slack Loop",
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
  value: "openingtype",
  label: "Lid Type",
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
  value: "clusterringnfid",
  label: "Hub NFID",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string",
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
    vertical: true,
    multiple: true,
    operators: ["equal", "not_equal", "contains"],
    values: []
  }
}];



// GIS ROUTES PROPERTIES

var gisRoutesProperties = [{
  value: "constructiontype",
  label: "Construction Type",
  table: {
    visible: true
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
  value: "calculatedlength",
  label: "Engineered Footage",
  table: {
    visible: true
  },
  filter: {
    type: "integer",
    vertical: true,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "workorderid",
  label: "Work Order ID",
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
  value: "sitespannfid",
  label: "Site NFID",
  table: {
    visible: false,
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
  value: "fqn_id",
  label: "Route FQNID",
  table: {
    visible: false,
    sortable: false
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
  value: "fibercable_fqnid",
  label: "Fiber FQNID",
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
  value: "duct_diameter",
  label: "Duct Size",
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
  value: "duct_count",
  label: "Duct Quantity",
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
  value: "cableplacedfootage",
  label: "Actual Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
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
  value: "permit_submitted",
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
    operators: ["is_not_null"],
    values: []
  }
},
{
  value: "permit_received",
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
    operators: ["is_not_null"],
    values: []
  }
},
{
  value: "constructionstart",
  label: "Construction Start",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_null"],
    values: []
  }
},
{
  value: "cableplaced",
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
    operators: ["is_not_null"],
    values: []
  }
},
{
  value: "construction_new_aerial",
  label: "New Aerial Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "construction_overlash_aerial",
  label: "Overlash Aerial Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "construction_new_ug",
  label: "New Underground Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "construction_new_hardscape",
  label: "New Hardscape Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "construction_existingvz",
  label: "Existing Vz Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
    values: []
  }
},
{
  value: "construction_existingthird",
  label: "Exisitng 3rd Footage",
  table: {
    visible: false,
    sortable: true
  },
  filter: {
    type: "integer",
    vertical: false,
    multiple: true,
    operators: ["between"],
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
}];



// GIS SEGMENTS PROPERTIES

var gisSegmentsProperties = [{
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
    operators: ["is_not_null"],
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
    operators: ["is_not_null"],
    values: []
  }
},
{
  value: "permit_received",
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
    operators: ["is_not_null"],
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
    operators: ["is_not_null"],
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
    operators: ["is_not_null"],
    values: []
  }
}];



// GIS SECTIONS PROPERTIES

var gisSectionsProperties = [{
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


// GIS SPLICES PROPERTIES

var gisSplicesProperties = [{
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
    value: "date",
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["is_not_empty"],
    values: []
  }
}];


// FULCRUM RESTO BEFORE PICTURES PROPERTIES

var fulcrumRestoBeforeProperties = [{
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



// FULCRUM RESTO AFTER PICTURES PROPERTIES


var fulcrumRestoAfterProperties = [{
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



// FULCRUM ROUTES CABLE PICTURES PROPERTIES



var fulcrumRoutesCableProperties = [{
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



// FULCRUM SIGNATURE PICTURES PROPERTIES

var fulcrumRoutesSignaturesCXProperties = [{
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


var fulcrumRoutesSignaturesCPProperties = [{
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


var fulcrumHardscapePicturesProperties = [{
  value: "hardscape_cx_url",
  label: "Pipe Hardscape",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["contains"],
    values: []
  }
},
{
  value: "photos_hardscape_url",
  label: "Additional Hardscape/Potholes",
  table: {
    visible: false,
    sortable: false
  },
  filter: {
    type: "string",
    vertical: true,
    multiple: true,
    operators: ["contains"],
    values: []
  }
}];



function DrawCharts() {

  // ENGINEERED STATUS
  $(function() {
    var result = alasql("SELECT oofstatus AS label, COUNT(oofstatus) AS total FROM ? GROUP BY oofstatus", [gisSegmentsFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#engineeredStatus",
        data: {
          type: "pie",
          columns: columns,
          labels: true
        }
    });
  });


  // CONSTRUCTION STATUS
  $(function() {
    var result = alasql("SELECT status AS label, COUNT(status) AS total FROM ? GROUP BY status", [fulcrumRoutesFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#constructionStatus",
        data: {
          type: "pie",
          columns: columns,
          labels: true
        }
    });
  });


  // ENGINEERED ROUTES
  $(function() {
    var result = alasql("SELECT oofstatus AS label, SUM(COALESCE(calculatedlength::NUMBER)/5280) AS miles FROM ? GROUP BY oofstatus", [gisRoutesFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.miles]];
    });
    var chart = c3.generate({
        bindto: "#engineeredRoutes",
        data: {
          type: "bar",
          columns: columns,
          labels: {
            format: {
              columns: d3.format('.2f')
            }
          }
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Duct Miles"]
          },
          y: {
            tick: {
              format: d3.format('.2f')
            }
          }
        }
    });
  });


  // ENGINEERED SEGMENTS
  $(function() {
    var result = alasql("SELECT oofstatus AS label, SUM(COALESCE(calculatedlength::NUMBER)/5280) AS miles FROM ? GROUP BY oofstatus", [gisSegmentsFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.miles]];
    });
    var chart = c3.generate({
        bindto: "#engineeredSegments",
        data: {
          type: "bar",
          columns: columns,
          labels: {
            format: {
              columns: d3.format('.2f')
            }
          }
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Cable Miles"]
          },
          y: {
            tick: {
              format: d3.format('.2f')
            }
          }
        }
    });
  });


  // CABLE FOOTAGE
  $(function() {
    
    var result1 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_new_aerial::NUMBER)) FROM ?", [gisRoutesFeatures]);
    var result2 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_overlash_aerial::NUMBER)) FROM ?", [gisRoutesFeatures]);
    var result3 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_new_ug::NUMBER)) FROM ?", [gisRoutesFeatures]);
    var result4 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_new_hardscape::NUMBER)) FROM ?", [gisRoutesFeatures]);
    var result5 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_existingvz::NUMBER)) FROM ?", [gisRoutesFeatures]);
    var result6 = alasql("COLUMN OF SELECT SUM(COALESCE(construction_existingthird::NUMBER)) FROM ?", [gisRoutesFeatures]);

    alasql('CREATE TABLE construction_footages(type TEXT,footage INT)');
    
    var data = [{"type" : "New Aerial", "footage" : result1}, {"type" : "Overlash Aerial", "footage" : result2}, {"type" : "New Underground", "footage" : result3}, 
    {"type" : "New Hardscape", "footage" : result4}, {"type" : "Existing Vz", "footage" : result5}, {"type" : "Existing Third", "footage" : result6}]

    alasql.tables.construction_footages.data = data;

    var columns = $.map(alasql.tables.construction_footages.data, function(data) {
      return [[data.type, data.footage]];
    });

    var chart = c3.generate({
        bindto: "#footageComplete",
        data: {
          type: "bar",
          columns: columns,
          labels: true
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Cable Footage"]
          }
        }
    });
  });


  // HARDSCAPE FOOTAGE 
  $(function() {
    var result = alasql("SELECT type_hardscape AS label, SUM(COALESCE(footage_hardscape::NUMBER)) AS total FROM ? GROUP BY type_hardscape", [fulcrumHardscapeFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#hardscapeComplete",
        data: {
          type: "bar",
          columns: columns,
          labels: true
        },
        axis: {
          x: {
            type: 'category',
            categories: ["Hardscape Footage"]
          }
        }
    });
  });


  // RESTORATION COMPLETED 
  $(function() {
    var result = alasql("SELECT restoration_complete_tilson AS label, COUNT(restoration_complete_tilson) AS total FROM ? GROUP BY restoration_complete_tilson", [fulcrumRestoFeatures]);
    var columns = $.map(result, function(data) {
      return [[data.label, data.total]];
    });
    var chart = c3.generate({
        bindto: "#restorationComplete",
        data: {
          type: "pie",
          columns: columns,
          labels: true
        }
    });
  });
}




$(function() {
  $(".title").html(fulcrumRoutesConfig.title);
});




function gisDemandPointsBuildConfig() {
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
  }];

  $.each(gisDemandPointsProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisDemandPointsGeojson.features], function(results){
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

  gisDemandPointsBuildFilter();
  map.fitBounds(gisDemandPoints.getBounds());
  //fulcrumRoutesBuildTable();
}


function gisStructuresBuildConfig() {
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
  }];

  $.each(gisStructuresProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisStructuresGeojson.features], function(results){
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

  gisStructuresBuildFilter();
  //gisStructuresBuildTable();
}


function fulcrumRoutesBuildConfig() {
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
  }];

  $.each(fulcrumRoutesProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [fulcrumRoutesGeojson.features], function(results){
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

  fulcrumRoutesBuildFilter();
  //fulcrumRoutesBuildTable();
}


function fulcrumRestoBuildConfig() {
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
  }];

  $.each(fulcrumRestoProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [fulcrumRestoGeojson.features], function(results){
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

  fulcrumRestoBuildFilter();
  //fulcrumRestoBuildTable();
}


function fulcrumHardscapeBuildConfig() {
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
  }];

  $.each(fulcrumHardscapeProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [fulcrumHardscapeGeojson.features], function(results){
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

  fulcrumHardscapeBuildFilter();
  //fulcrumHardscapeBuildTable();
}


function gisRoutesBuildConfig() {
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
  }];

  $.each(gisRoutesProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisRoutesGeojson.features], function(results){
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

  gisRoutesBuildFilter();
  //gisRoutesBuildTable();
}


function gisSegmentsBuildConfig() {
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

  $.each(gisSegmentsProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisSegmentsGeojson.features], function(results){
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

  gisSegmentsBuildFilter();
  //gisSegmentsBuildTable();
}



function gisSectionsBuildConfig() {
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
  }];

  $.each(gisSectionsProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisSectionsGeojson.features], function(results){
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

  gisSectionsBuildFilter();
  //gisSectionsBuildTable();
}


function gisSplicesBuildConfig() {
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
  }];

  $.each(gisSplicesProperties, function(index, value) {
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
            alasql("SELECT DISTINCT(properties->"+value.value+") AS field FROM ? ORDER BY field ASC", [gisSplicesGeojson.features], function(results){
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

  gisSplicesBuildFilter();
  //gisSplicesBuildTable();
}



// BASEMAP LAYERS

var mapboxOSM = L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWNvdHJ1c3QiLCJhIjoibGo4TG5nOCJ9.QJnT2dgjL4_4EA7WlK8Zkw', {
    maxZoom: 20
});


var mapboxSat = L.tileLayer('https://api.mapbox.com/v4/cfritz1387.573ca1ee/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2ZyaXR6MTM4NyIsImEiOiJjaWphZTZ0eHkwMDVwdWlseGx5aWhhbXlwIn0._lgb3vbGMSx1-jdZCufdgg', {
    maxZoom: 20
});


// HIGHLIGHT LAYERS


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


var fuclrumRoutesHighlight = L.geoJson(null, {
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




var gisDemandPoints = L.geoJson(null, {
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          gisDemandPointsInfo(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(gisDemandPoints.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisDemandPointsConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisDemandPointsConfig.hoverProperty]);
            $(".info-control").show();
          }
        },
        dblclick: function (e) {
          highlightLayer.clearLayers();
        }
      });
    }
    if (feature.properties.clustername === "REMOVE") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/removed.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL BROADWAY") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20BROADWAY.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL CRESCENT") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20CRESCENT.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL HOLLADAY") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20HOLLADAY.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL HONEY") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20HONEY.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL RED HANGER") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20RED%20HANGER.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL RELIEVER") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20RELIEVER.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL ROXANNE") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20ROXANNE.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SAND JUMP") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SAND%20JUMP.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SANDY") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SANDY.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SHERWOOD PARK") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SHERWOOD%20PARK.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SOUTH JORDAN") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SOUTH%20JORDAN.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SOUTH SALT LAKE CITY") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SOUTH%20SALT%20LAKE.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "SAL SUGARHOUSE") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20SUGARHOUSE.png",
          iconSize: [20, 20],
        })
      );
    } else if (feature.properties.clustername === "UTSL-KEARNS MTSO") {
      layer.setIcon(
        L.icon({
          iconUrl: "Pictures/demandPoints/SAL%20KEARNS.png",
          iconSize: [20, 20],
        })
      );
    }
  }
});

var fulcrumRoutes = L.geoJson(null, {
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
          fulcrumRoutesInfo(L.stamp(layer));
          fulcrumRoutesCablePictures(L.stamp(layer));
          fulcrumRoutesSignaturesCX(L.stamp(layer));
          fulcrumRoutesSignaturesCP(L.stamp(layer));
          fuclrumRoutesHighlight.clearLayers();
          fuclrumRoutesHighlight.addData(fulcrumRoutes.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (fulcrumRoutesConfig.hoverProperty) {
            $(".info-control").html(feature.properties[fulcrumRoutesConfig.hoverProperty]);
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



var fulcrumResto = L.geoJson(null, {
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
          fulcrumRestoInfo(L.stamp(layer));
          fulcrumRestoBeforePictures(L.stamp(layer));
          fulcrumRestoAfterPictures(L.stamp(layer));
          fuclrumRoutesHighlight.clearLayers();
          fuclrumRoutesHighlight.addData(fulcrumResto.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (fulcrumRestoConfig.hoverProperty) {
            $(".info-control").html(feature.properties[fulcrumRestoConfig.hoverProperty]);
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


var fulcrumHardscape = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, {
      title: feature.properties["type_hardscape"],
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
          fulcrumHardscapeInfo(L.stamp(layer));
          fulcrumHardscapePictures(L.stamp(layer));
          fuclrumRoutesHighlight.clearLayers();
          fuclrumRoutesHighlight.addData(fulcrumHardscape.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (fulcrumHardscapeConfig.hoverProperty) {
            $(".info-control").html(feature.properties[fulcrumHardscapeConfig.hoverProperty]);
            $(".info-control").show();
          }
        },
        mouseout: function (e) {
          $(".info-control").hide();
        }
      });
    }
  }
});


var gisStructures = L.geoJson(null, {
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          gisStructuresInfo(L.stamp(layer));
          fuclrumRoutesHighlight.clearLayers();
          fuclrumRoutesHighlight.addData(gisStructures.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisStructuresConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisStructuresConfig.hoverProperty]);
            $(".info-control").show();
          }
        },
        mouseout: function (e) {
          $(".info-control").hide();
        }
      });
      if (feature.properties.objectid) {
        layer.setIcon(
          L.icon({
            iconUrl: "Pictures/structure.png",
            iconSize: [14, 14],
          })
        );
      }
    }
  }
});


var gisRoutes = L.geoJson(null, {
  style: function (feature, layer) {
    if (feature.properties.cableplaced > 0) {
      return {
        color: "#2AE100",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.constructionstart > 0) {
      return {
        color: "#FF1ED9",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.permit_received > 0) {
      return {
        color: "#F47200",
        weight: 6,
        opacity: 0.7
      };
    } else if (feature.properties.permit_submitted > 0) {
      return {
        color: "#1BE8F3",
        weight: 6,
        opacity: 0.7
      };
    }
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          gisRoutesInfo(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(gisRoutes.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisRoutesConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisRoutesConfig.hoverProperty]);
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



var gisSegments = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.oofstatus === "Cable Placed" || feature.properties.oofstatus === "Construction Started" || feature.properties.oofstatus === "Permits Received" ||feature.properties.oofstatus === "Permits Submitted" || feature.properties.oofstatus === "In Design") {
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
    } else if (feature.properties.oofstatus === "Construction Started") {
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
          gisSegmentsInfo(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(gisSegments.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisSegmentsConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisSegmentsConfig.hoverProperty]);
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


var gisSections = L.geoJson(null, {
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
          gisSectionsInfo(L.stamp(layer));
          highlightLayer4.clearLayers();
          highlightLayer4.addData(gisSections.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisSectionsConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisSectionsConfig.hoverProperty]);
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



var gisSplices = L.geoJson(null, {
  filter: function (feature) {
    if (feature.properties.splicetype === "MCA" || feature.properties.splicetype === "Reel End") {
      return true;
    };
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      layer.on({
        click: function (e) {
          gisSplicesInfo(L.stamp(layer));
          highlightLayer.clearLayers();
          highlightLayer.addData(gisSplices.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (gisSplicesConfig.hoverProperty) {
            $(".info-control").html(feature.properties[gisSplicesConfig.hoverProperty]);
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
            iconSize: [15, 25],
          })
        );
      } else if (feature.properties.splicetype === "Reel End" && (feature.properties.c510spliceribbon === 864 || feature.properties.c500spliceloose === 864)) {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/Reel-End2.png",
            iconSize: [15, 25],
          })
        );
      } else if (feature.properties.splicetype === "Reel End") {
        layer.setIcon(
          L.icon({
            iconUrl: "assets/pictures/Reel-End.png",
            iconSize: [15, 25],
          })
        );
      }
    } 
  }
});




// GIS DEMAND POINTS GEOJSON

$.getJSON(gisDemandPointsConfig.geojson, function (data) {
  gisDemandPointsGeojson = data;
  gisDemandPointsFeatures = $.map(gisDemandPointsGeojson.features, function(feature) {
    return feature.properties;
  });
  gisDemandPoints.addData(data);
  gisDemandPointsBuildConfig();
  $("#loading-mask").hide();
});


// FULCRUM ROUTES GEOJSON

$.getJSON(fulcrumRoutesConfig.geojson, function (data) {
  fulcrumRoutesGeojson = data;
  fulcrumRoutesFeatures = $.map(fulcrumRoutesGeojson.features, function(feature) {
    return feature.properties;
  });
  fulcrumRoutes.addData(data);
  fulcrumRoutesBuildConfig();
  $("#loading-mask").hide();
});


// FULCRUM RESTO GEOJSON

$.getJSON(fulcrumRestoConfig.geojson, function (data) {
  fulcrumRestoGeojson = data
  fulcrumRestoFeatures = $.map(fulcrumRestoGeojson.features, function(feature) {
    return feature.properties;
  });
  fulcrumResto.addData(data);
  fulcrumRestoBuildConfig();
  $("#loading-mask").hide();
});


// FULCRUM HARDSCAPE GEOJSON

$.getJSON(fulcrumHardscapeConfig.geojson, function (data) {
  fulcrumHardscapeGeojson = data
  fulcrumHardscapeFeatures = $.map(fulcrumHardscapeGeojson.features, function(feature) {
    return feature.properties;
  });
  fulcrumHardscape.addData(data);
  fulcrumHardscapeBuildConfig();
  $("#loading-mask").hide();
});


// GIS STRUCTURES GEOJSON

$.getJSON(gisStructuresConfig.geojson, function (data) {
  gisStructuresGeojson = data
  gisStructuresFeatures = $.map(gisStructuresGeojson.features, function(feature) {
    return feature.properties;
  });
  gisStructures.addData(data);
  gisStructuresBuildConfig();
  $("#loading-mask").hide();
});


// GIS ROUTES GEOJSON

$.getJSON(gisRoutesConfig.geojson, function (data) {
  gisRoutesGeojson = data
  gisRoutesFeatures = $.map(gisRoutesGeojson.features, function(feature) {
    return feature.properties;
  });
  gisRoutes.addData(data);
  gisRoutesBuildConfig();
  $("#loading-mask").hide();
});


// GIS SEGMENTS GEOJSON

$.getJSON(gisSegmentsConfig.geojson, function (data) {
  gisSegmentsGeojson = data
  gisSegmentsFeatures = $.map(gisSegmentsGeojson.features, function(feature) {
    return feature.properties;
  });
  gisSegments.addData(data);
  gisSegmentsBuildConfig();
  $("#loading-mask").hide();
});


// GIS SECTIONS GEOJSON

$.getJSON(gisSectionsConfig.geojson, function (data) {
  gisSectionsGeojson = data
  gisSectionsFeatures = $.map(gisSectionsGeojson.features, function(feature) {
    return feature.properties;
  });
  gisSections.addData(data);
  gisSectionsBuildConfig();
  $("#loading-mask").hide();
});



// GIS SPLICES GEOJSON

$.getJSON(gisSplicesConfig.geojson, function (data) {
  gisSplicesGeojson = data
  gisSplicesFeatures = $.map(gisSplicesGeojson.features, function(feature) {
    return feature.properties;
  });
  gisSplices.addData(data);
  gisSplicesBuildConfig();
  $("#loading-mask").hide();
});




var map = L.map("map", {
  layers: [mapboxOSM, gisDemandPoints, highlightLayer, fuclrumRoutesHighlight, highlightLayer3, highlightLayer4]
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
};
var overlayLayers = {
  "<span id='layer-name'>Demand Points</span>": gisDemandPoints,
  "<span id='layer-name'>Construction Routes</span>": fulcrumRoutes,
  "<span id='layer-name1'>Construction Resto</span>": fulcrumResto,
  "<span id='layer-name1'>Construction Hardscape</span>": fulcrumHardscape,
  "<span id='layer-name'>Engineered Structures</span>": gisStructures,
  "<span id='layer-name6'>Engineered Routes</span>": gisRoutes,
  "<span id='layer-name3'>Engineered Segments</span>": gisSegments,
  "<span id='layer-name4'>Engineered Sections</span>": gisSections,
  "<span id='layer-name5'>Engineered Splices</span>": gisSplices,
};


var layerControl = L.control.layers(baseLayers, overlayLayers, {
  collapsed: isCollapsed
}).addTo(map);

/* Filter table to only show features in current map bounds
map.on("moveend", function (e) {
  syncRoutesTable();
  syncRestoTable();
});
*/

map.on("click", function(e) {
  highlightLayer.clearLayers();
  fuclrumRoutesHighlight.clearLayers();
  highlightLayer3.clearLayers();
  highlightLayer4.clearLayers();
});

// Table formatter to make links clickable
function urlFormatter (value, row, index) {
  if (typeof value == "string" && (value.indexOf("http") === 0 || value.indexOf("https") === 0)) {
    return "<a href='"+value+"' target='_blank'>"+value+"</a>";
  }
}


function gisDemandPointsBuildFilter() {
  $("#gisDemandPoints-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function fulcrumRoutesBuildFilter() {
  $("#fulcrumRoutes-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function fulcrumRestoBuildFilter() {
  $("#fulcrumResto-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function fulcrumHardscapeBuildFilter() {
  $("#fulcrumHardscape-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function gisStructuresBuildFilter() {
  $("#gisStructures-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function gisRoutesBuildFilter() {
  $("#gisRoutes-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function gisSegmentsBuildFilter() {
  $("#gisSegments-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function gisSectionsBuildFilter() {
  $("#gisSections-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}

function gisSplicesBuildFilter() {
  $("#gisSplices-Filter_DATA").queryBuilder({
    allow_empty: true,
    filters: filters
  });
}


function gisDemandPointsApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisDemandPoints-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisDemandPointsGeojson.features], function(features){
    gisDemandPoints.clearLayers();
    gisDemandPoints.addData(features);
    //syncRoutesTable();
    map.fitBounds(gisDemandPoints.getBounds());
  });
}

function fulcrumRoutesApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#fulcrumRoutes-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [fulcrumRoutesGeojson.features], function(features){
    fulcrumRoutes.clearLayers();
    fulcrumRoutes.addData(features);
    //syncRoutesTable();
    map.fitBounds(fulcrumRoutes.getBounds());
  });
}

function fulcrumRestoApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#fulcrumResto-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [fulcrumRestoGeojson.features], function(features){
    fulcrumResto.clearLayers();
    fulcrumResto.addData(features);
    //syncRestoTable();
    map.fitBounds(fulcrumResto.getBounds());
  });
}

function fulcrumHardscapeApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#fulcrumHardscape-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [fulcrumHardscapeGeojson.features], function(features){
    fulcrumHardscape.clearLayers();
    fulcrumHardscape.addData(features);
    //syncHardscapeTable();
    map.fitBounds(fulcrumHardscape.getBounds());
  });
}

function gisStructuresApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisStructures-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisStructuresGeojson.features], function(features){
    gisStructures.clearLayers();
    gisStructures.addData(features);
    //syncRoutesTable();
    map.fitBounds(gisStructures.getBounds());
  });
}

function gisRoutesApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisRoutes-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisRoutesGeojson.features], function(features){
    gisRoutes.clearLayers();
    gisRoutes.addData(features);
    //syncGISRoutesTable();
    map.fitBounds(gisRoutes.getBounds());
  });
}

function gisSegmentsApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisSegments-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisSegmentsGeojson.features], function(features){
    gisSegments.clearLayers();
    gisSegments.addData(features);
    //syncFiberTable();
    map.fitBounds(gisSegments.getBounds());
  });
}

function gisSectionsApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisSections-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisSectionsGeojson.features], function(features){
    gisSections.clearLayers();
    gisSections.addData(features);
    //syncFiberRouteTable();
    map.fitBounds(gisSections.getBounds());
  });
}

function gisSplicesApplyFilter() {
  var query = "SELECT * FROM ?";
  var sql = $("#gisSplices-Filter_DATA").queryBuilder("getSQL", false, false).sql;
  if (sql.length > 0) {
    query += " WHERE " + sql;
  }
  alasql(query, [gisSplicesGeojson.features], function(features){
    gisSplices.clearLayers();
    gisSplices.addData(features);
    //syncSpliceTable();
    map.fitBounds(gisSplices.getBounds());
  });
}



/*function buildRoutesTable() {
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
      var layer = fulcrumRoutes.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightLayer.clearLayers();
      highlightLayer.addData(fulcrumRoutes.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      fulcrumRoutesInfo(row.leaflet_stamp);
      highlightLayer.clearLayers();
      highlightLayer.addData(fulcrumRoutes.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(fulcrumRoutes.getBounds());

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
      var layer = fulcrumResto.getLayer(row.leaflet_stamp);
      map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 19);
      highlightLayer.clearLayers();
      highlightLayer.addData(fulcrumResto.getLayer(row.leaflet_stamp).toGeoJSON());
    },
    onDblClickRow: function(row) {
      fulcrumRoutesInfo1(row.leaflet_stamp);
      highlightLayer.clearLayers();
      highlightLayer.addData(fulcrumResto.getLayer(row.leaflet_stamp).toGeoJSON());
    },
  });

  map.fitBounds(fulcrumResto.getBounds());

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
      fulcrumRoutesInfo5(row.leaflet_stamp);
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
  fulcrumRoutes.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(featureLayer)) {
      fulcrumRoutes.getLayer()
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
  fulcrumResto.eachLayer(function (layer) {
    layer.feature.properties.leaflet_stamp = L.stamp(layer);
    if (map.hasLayer(fulcrumResto)) {
      fulcrumResto.getLayer()
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
  gisSegments.eachLayer(function (layer) {
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
  gisSections.eachLayer(function (layer) {
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
  gisSplices.eachLayer(function (layer) {
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
*/

function gisDemandPointsInfo(id) {
  var featureProperties = gisDemandPoints.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisDemandPointsProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#gisDemandPoints-Info_DATA").html(content);
  $("#gisDemandPoints-Info_MODAL").modal("show");
}


function fulcrumRoutesInfo(id) {
  var featureProperties = fulcrumRoutes.getLayer(id).feature.properties;
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
    $.each(fulcrumRoutesProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumRoutes-Info_DATA").html(content);
  $("#fulcrumRoutes-Info_MODAL").modal("show");
}


function fulcrumRestoInfo(id) {
  var featureProperties = fulcrumResto.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(fulcrumRestoProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumResto-Info_DATA").html(content);
  $("#fulcrumResto-Info_MODAL").modal("show");
};


function fulcrumHardscapeInfo(id) {
  var featureProperties = fulcrumHardscape.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf("http://www.fulcrumapp") === 0) {
      value = "<a href='" + value + "' target='_blank'>" + "Fulcrum Record" + "</a>";
    }
    $.each(fulcrumHardscapeProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumHardscape-Info_DATA").html(content);
  $("#fulcrumHardscape-Info_MODAL").modal("show");
};


function gisStructuresInfo(id) {
  var featureProperties = gisStructures.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisStructuresProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#gisStructures-Info_DATA").html(content);
  $("#gisStructures-Info_MODAL").modal("show");
}


function gisRoutesInfo(id) {
  var featureProperties = gisRoutes.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisRoutesProperties, function(index, property) {
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
  $("#gisRoutes-Info_DATA").html(content);
  $("#gisRoutes-Info_MODAL").modal("show");
}


function gisSegmentsInfo(id) {
  var featureProperties = gisSegments.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisSegmentsProperties, function(index, property) {
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
  $("#gisSegments-Info_DATA").html(content);
  $("#gisSegments-Info_MODAL").modal("show");
};

function gisSectionsInfo(id) {
  var featureProperties = gisSections.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisSectionsProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#gisSections-Info_DATA").html(content);
  $("#gisSections-Info_MODAL").modal("show");
};

function gisSplicesInfo(id) {
  var featureProperties = gisSplices.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    $.each(gisSplicesProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#gisSplices-Info_DATA").html(content);
  $("#gisSplices-Info_MODAL").modal("show");
};


function fulcrumRoutesCablePictures(id) {
  var featureProperties = fulcrumRoutes.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos/";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(fulcrumRoutesCableProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumRoutes-Cable_PICS").html(content);
};



function fulcrumRoutesSignaturesCX(id) {
  var featureProperties = fulcrumRoutes.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='signatureGallery(\""+ value +"\")'; return false;'>View Signatures</a>";
    }
    $.each(fulcrumRoutesSignaturesCXProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumRoutes-CX_SIGS").html(content);
};


function fulcrumRoutesSignaturesCP(id) {
  var featureProperties = fulcrumRoutes.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='signatureGallery(\""+ value +"\")'; return false;'>View Signatures</a>";
    }
    $.each(fulcrumRoutesSignaturesCPProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumRoutes-CP_SIGS").html(content);
};



function fulcrumRestoBeforePictures(id) {
  var featureProperties = fulcrumResto.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(fulcrumRestoBeforeProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumResto-Before_PICS").html(content);
};


function fulcrumRestoAfterPictures(id) {
  var featureProperties = fulcrumResto.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(fulcrumRestoAfterProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumResto-After_PICS").html(content);
};


function fulcrumHardscapePictures(id) {
  var featureProperties = fulcrumHardscape.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
  $.each(featureProperties, function(key, value) {
    if (!value) {
      value = "";
    }
    if (typeof value == "string"  && value.indexOf(photoLink) === 0) {
      value = "<a href='#' onclick='photoGallery(\""+ value +"\")'; return false;'>View Photos</a>";
    }
    $.each(fulcrumHardscapePicturesProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          content += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  content += "<table>";
  $("#fulcrumHardscape_PICS").html(content);
};



// VIEWER FOR FULCRUM PICTURES

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


// VIEWER FOR FULCRUM VIDEOS


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



// VIEWER FOR FULCRUM SIGNATURES


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



/*function switchView(view) {
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
*/



L.easyPrint({
  title: 'Print',
  elementsToHide: 'p, h2, .gitButton'
}).addTo(map)



$("#refresh_BTN").click(function() {
  gisDemandPoints.clearLayers();
  fulcrumRoutes.clearLayers();
  fulcrumResto.clearLayers();
  fulcrumHardscape.clearLayers();
  gisStructures.clearLayers();
  gisRoutes.clearLayers();
  gisSegments.clearLayers();
  gisSections.clearLayers();
  gisSplices.clearLayers();

  $.getJSON(gisDemandPointsConfig.geojson, function (data) {
    gisDemandPointsGeojson = data;
    gisDemandPointsFeatures = $.map(gisDemandPointsGeojson.features, function(feature) {
      return feature.properties;
    });
    gisDemandPoints.addData(data);
    gisDemandPointsBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(fulcrumRoutesConfig.geojson, function (data) {
    fulcrumRoutesGeojson = data;
    fulcrumRoutesFeatures = $.map(fulcrumRoutesGeojson.features, function(feature) {
      return feature.properties;
    });
    fulcrumRoutes.addData(data);
    fulcrumRoutesBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(fulcrumRestoConfig.geojson, function (data) {
    fulcrumRestoGeojson = data
    fulcrumRestoFeatures = $.map(fulcrumRestoGeojson.features, function(feature) {
      return feature.properties;
    });
    fulcrumResto.addData(data);
    fulcrumRestoBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(fulcrumHardscapeConfig.geojson, function (data) {
    fulcrumHardscapeGeojson = data
    fulcrumHardscapeFeatures = $.map(fulcrumHardscapeGeojson.features, function(feature) {
      return feature.properties;
    });
    fulcrumHardscape.addData(data);
    fulcrumHardscapeBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(gisStructuresConfig.geojson, function (data) {
    gisStructuresGeojson = data;
    gisStructuresFeatures = $.map(gisStructuresGeojson.features, function(feature) {
      return feature.properties;
    });
    gisStructures.addData(data);
    gisStructuresBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(gisRoutesConfig.geojson, function (data) {
    gisRoutesGeojson = data
    gisRoutesFeatures = $.map(gisRoutesGeojson.features, function(feature) {
      return feature.properties;
    });
    gisRoutes.addData(data);
    gisRoutesBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(gisSegmentsConfig.geojson, function (data) {
    gisSegmentsGeojson = data
    gisSegmentsFeatures = $.map(gisSegmentsGeojson.features, function(feature) {
      return feature.properties;
    });
    gisSegments.addData(data);
    gisSegmentsBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(gisSectionsConfig.geojson, function (data) {
    gisSectionsGeojson = data
    gisSectionsFeatures = $.map(gisSectionsGeojson.features, function(feature) {
      return feature.properties;
    });
    gisSections.addData(data);
    gisSectionsBuildConfig();
    $("#loading-mask").hide();
  });

  $.getJSON(gisSplicesConfig.geojson, function (data) {
    gisSplicesGeojson = data
    gisSplicesFeatures = $.map(gisSplicesGeojson.features, function(feature) {
      return feature.properties;
    });
    gisSplices.addData(data);
    gisSplicesBuildConfig();
    $("#loading-mask").hide();
  });

  gisDemandPointsBuildFilter();
  fulcrumRoutesBuildFilter();
  fulcrumRestoBuildFilter();
  fulcrumHardscapeBuildFilter();
  gisStructuresBuildFilter();
  gisRoutesBuildFilter();
  gisSegmentsBuildFilter();
  gisSectionsBuildFilter();
  gisSplicesBuildFilter();

  map.fitBounds(gisDemandPoints.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});



//ABOUT MODAL

$("#about_BTN").click(function() {
  $("#about_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});


//FILTER MODAL

$("#gisDemandPoints-Filter_BTN").click(function() {
  $("#gisDemandPoints-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumRoutes-Filter_BTN").click(function() {
  $("#fulcrumRoutes-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumResto-Filter_BTN").click(function() {
  $("#fulcrumResto-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumHardscape-Filter_BTN").click(function() {
  $("#fulcrumHardscape-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisStructures-Filter_BTN").click(function() {
  $("#gisStructures-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisRoutes-Filter_BTN").click(function() {
  $("#gisRoutes-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisSegments-Filter_BTN").click(function() {
  $("#gisSegments-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisSections-Filter_BTN").click(function() {
  $("#gisSections-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisSplices-Filter_BTN").click(function() {
  $("#gisSplices-Filter_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});





//APPLY FILTER

$("#gisDemandPoints-ApplyFilter_BTN").click(function() {
  gisDemandPointsApplyFilter();
  $('#gisDemandPoints-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumRoutes-ApplyFilter_BTN").click(function() {
  fulcrumRoutesApplyFilter();
  $('#fulcrumRoutes-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumResto-ApplyFilter_BTN").click(function() {
  fulcrumRestoApplyFilter();
  $('#fulcrumResto-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#fulcrumHardscape-ApplyFilter_BTN").click(function() {
  fulcrumHardscapeApplyFilter();
  $('#fulcrumHardscape-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisStructures-ApplyFilter_BTN").click(function() {
  gisStructuresApplyFilter();
  $('#gisStructures-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisRoutes-ApplyFilter_BTN").click(function() {
  gisRoutesApplyFilter();
  $('#gisRoutes-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisSegments-ApplyFilter_BTN").click(function() {
  gisSegmentsApplyFilter();
  $('#gisSegments-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisSections-ApplyFilter_BTN").click(function() {
  gisSectionsApplyFilter();
  $('#gisSections-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#terms_BTN").click(function() {
  $('#terms_MODAL').modal('show');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#gisDemandPoints-ResetFilter_BTN").click(function() {
  $("#gisDemandPoints-Filter_DATA").queryBuilder("reset");
  gisDemandPointsApplyFilter();
  $('#gisDemandPoints-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});



// TERMS AND CONDITIONS

$("#terms_BTN").click(function() {
  $('#terms_MODAL').modal('show');
  $(".navbar-collapse.in").collapse("hide");
  return false;
});


//RESET FILTER

$("#gisDemandPoints-ResetFilter_BTN").click(function() {
  $("#gisDemandPoints-Filter_DATA").queryBuilder("reset");
  gisDemandPointsApplyFilter();
  $('#gisDemandPoints-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#fulcrumRoutes-ResetFilter_BTN").click(function() {
  $("#fulcrumRoutes-Filter_DATA").queryBuilder("reset");
  fulcrumRoutesApplyFilter();
  $('#fulcrumRoutes-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#fulcrumResto-ResetFilter_BTN").click(function() {
  $("#fulcrumResto-Filter_DATA").queryBuilder("reset");
  fulcrumRestoApplyFilter();
  $('#fulcrumResto-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#fulcrumHardscape-ResetFilter_BTN").click(function() {
  $("#fulcrumHardscape-Filter_DATA").queryBuilder("reset");
  fulcrumHardscapeApplyFilter();
  $('#fulcrumHardscape-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#gisStructures-ResetFilter_BTN").click(function() {
  $("#gisStructures-Filter_DATA").queryBuilder("reset");
  gisStructuresApplyFilter();
  $('#gisStructures-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#gisRoutes-ResetFilter_BTN").click(function() {
  $("#gisRoutes-Filter_DATA").queryBuilder("reset");
  gisRoutesApplyFilter();
  $('#gisRoutes-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#gisSegments-ResetFilter_BTN").click(function() {
  $("#gisSegments-Filter_DATA").queryBuilder("reset");
  gisSegmentsApplyFilter();
  $('#gisSegments-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#gisSections-ResetFilter_BTN").click(function() {
  $("#gisSections-Filter_DATA").queryBuilder("reset");
  gisSectionsApplyFilter();
  $('#gisSections-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});

$("#gisSplices-ResetFilter_BTN").click(function() {
  $("#gisSplices-Filter_DATA").queryBuilder("reset");
  gisSplicesApplyFilter();
  $('#gisSplices-Filter_MODAL').modal('hide');
  $(".navbar-collapse.in").collapse("hide");
});



$("#allLayers-ResetFilter_BTN").click(function() {
  $("#gisDemandPoints-Filter_DATA").queryBuilder("reset");
  gisDemandPointsApplyFilter();
  $("#fulcrumRoutes-Filter_DATA").queryBuilder("reset");
  fulcrumRoutesApplyFilter();
  $("#fulcrumResto-Filter_DATA").queryBuilder("reset");
  fulcrumRestoApplyFilter();
  $("#fulcrumHardscape-Filter_DATA").queryBuilder("reset");
  fulcrumHardscapeApplyFilter();
  $("#gisRoutes-Filter_DATA").queryBuilder("reset");
  gisRoutesApplyFilter();
  $("#gisStructures-Filter_DATA").queryBuilder("reset");
  gisStructuresApplyFilter();
  $("#gisSegments-Filter_DATA").queryBuilder("reset");
  gisSegmentsApplyFilter();
  $("#gisSections-Filter_DATA").queryBuilder("reset");
  gisSectionsApplyFilter();
  $("#gisSplices-Filter_DATA").queryBuilder("reset");
  gisSplicesApplyFilter();
  $(".navbar-collapse.in").collapse("hide");
});




//CHARTS MODAL

$("#chart_BTN").click(function() {
  $("#chart_MODAL").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});


$("#chart_MODAL").on("shown.bs.modal", function (e) {
  DrawCharts();
});



// FULCRUM ROUTES PICTURES

$("#fulcrumRoutes-Pictures_BTN").click(function() {
  $("#fulcrumRoutes-Pictures_MODAL").modal("show");
  return false;
});


// FULCRUM ROUTES SIGNATURES

$("#fulcrumRoutes-Signatures_BTN").click(function() {
  $("#fulcrumRoutes-Signatures_MODAL").modal("show");
  return false;
});


// FULCRUM RESTO PICTURES

$("#fulcrumResto-Pictures_BTN").click(function() {
  $("#fulcrumResto-Pictures_MODAL").modal("show");
  return false;
});

// FULCRUM HARDSCAPE PICTURES

$("#fulcrumHardscape-Pictures_BTN").click(function() {
  $("#fulcrumHardscape-Pictures_MODAL").modal("show");
  return false;
});



/* DATA DOWNLOADS

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

*/