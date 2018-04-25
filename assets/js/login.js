checkAuth();
bindUIActions();


function bindUIActions() {
  $("#login-btn").click(function() {
    login();
  });

  $("#login-modal").on("shown.bs.modal", function (e) {
    $(".modal-backdrop").css("opacity", "1");
  });

  $("#login-modal").on("hidden.bs.modal", function (e) {
    $(".modal-backdrop").css("opacity", "");
  });
};

function checkAuth() {
  if (!sessionStorage.getItem("fulcrum_app_token")) {
    $(document).ready(function() {
      $("#login-modal").modal("show");
    });
  } else {
    $("#login-modal").modal("hide");
  }
};

function login() {
  var username = $("#email").val();
  var password = $("#password").val();
  $.ajax({
    type: "GET",
    url: "https://api.fulcrumapp.com/api/v2/users.json",
    contentType: "application/json",
    dataType: "json",
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
    statusCode: {
      401: function() {
        alert("Incorrect credentials, please try again.");
      }
    },
    success: function (data) {
      $.each(data.user.contexts, function(index, context) {
        if (context.name == "Tilson SLC") {
          sessionStorage.setItem("fulcrum_app_token", btoa(context.api_token));
          sessionStorage.setItem("fulcrum_userfullname", data.user.first_name + " " + data.user.last_name);
          sessionStorage.setItem("fulcrum_useremail", data.user.email);
        }
      });
      if (sessionStorage.getItem("fulcrum_useremail").includes("fibertel")) {
        window.location.href = "tilson.html";
      } else {
        $(".modal-backdrop").css("opacity", "1");
      };
      if (!sessionStorage.getItem("fulcrum_app_token")) {
        alert("This login does not have access to the Tilson DataMap.");
      }
      checkAuth();
    }
  });
};


