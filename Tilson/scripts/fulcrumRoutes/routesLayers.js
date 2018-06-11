var highlight_routesLayer = L.geoJson(null, {
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



var routesLayer = L.geoJson(null, {
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
          routesInfo(L.stamp(layer));
          featureBluestakes(L.stamp(layer));
          featurePotholePics(L.stamp(layer));
          featureCXSignaturePics(L.stamp(layer));
          featureCPSignaturePics(L.stamp(layer));
          routesCablePictures(L.stamp(layer));
          highlightLayer2.clearLayers();
          highlightLayer2.addData(routesLayer.getLayer(L.stamp(layer)).toGeoJSON());
        },
        mouseover: function (e) {
          if (routesGeojson.hoverProperty) {
            $(".info-control").html(feature.properties[routesGeojson.hoverProperty]);
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



// Fetch the Routes GeoJSON file

$.getJSON(routesConfig.geojson, function (data) {
  routesGeojson = data;
  routesFeatures = $.map(routesGeojson.features, function(feature) {
    return feature.properties;
  });
  routesLayer.addData(data);
  routesConfig();
  $("#loading-mask").hide();
});



function routesInfo(id) {
  var routesData = routesLayer.getLayer(id).feature.properties;
  var routesContent = "<table class='table table-striped table-bordered table-condensed'>";
  $.each(routesData, function(key, value) {
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
    $.each(routesProperties, function(index, property) {
      if (key == property.value) {
        if (property.info !== false) {
          routesContent += "<tr><th>" + property.label + "</th><td>" + value + "</td></tr>";
        }
      }
    });
  });
  routesContent += "<table>";
  $("#routes_info").html(routesContent);
  $("#routes_info_modal").modal("show");
}



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



function videoGallery(video) {
  var videoArray = [];
  var videoIDs = video.split("videos=")[1];
  $.each(videoIDs.split("%2C"), function(index, id) {
    videoArray.push({href: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/videos/" + id});
  });
  $.fancybox(videoArray, {
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



function signatureGallery(signature) {
  var signatureArray = [];
  var signatureIDs = signature.split("signatures=")[1];
  $.each(signatureIDs.split("%2C"), function(index, id) {
    signatureArray.push({href: "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/signatures/" + id});
  });
  $.fancybox(signatureArray, {
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


function routesCablePictures(id) {
  var featureProperties = featureLayer.getLayer(id).feature.properties;
  var content = "<table class='table table-striped table-bordered table-condensed'>";
  var photoLink = "https://web.fulcrumapp.com/shares/fb96b48deb5cfb94/photos";
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