// Configuration of Routes in Fulcrum

var config = {
  geojson: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94.geojson",
  title: "SLC OneFiber Tilson QC",
  layerName: "Routes",
  hoverProperty: "status_title_github",
  sortProperty: "fqnid",
  sortOrder: "ascend",
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
    vertical: true,
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
  value: "construction_type_cx_final",
  label: "Construction Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "construction_start_date_cx_final",
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
  value: "construction_complete_date_cx_final",
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
  value: "construction_pass_date_qc_final",
  label: "Construction QC Pass Date",
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
  value: "construction_footage_cx_final",
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
  value: "cable_placement_type_final",
  label: "Cable Placement Type",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "string"
  }
},
{
  value: "cable_placement_start_date_cx_final",
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
  value: "cable_placement_complete_date_cx_final",
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
  value: "cable_placement_pass_date_qc_final",
  label: "Cable Placement QC Pass Date",
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
  value: "cable_placement_total_footage_cx_final",
  label: "Cable Placement Total Footage",
  table: {
    visible: true,
    sortable: true
  },
  filter: {
    type: "integer",
  },
}];