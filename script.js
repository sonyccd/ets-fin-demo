function intercomevent() {
    var event = $(".form-input #event").val();
    eventExample(event);
    $("#sent-event").html("Event Submitted");
}

function loggedin() {
    var uname = $(".form-input #user-name").val();
    var email = $(".form-input #user-email").val();
    if (!email) {
        alert("You need to provide an Email");
        return false;
    }
    updateUser(uname, email);
    $("#createUser").html("A new user should now be created");
}

function signout() {
    signOutExample();
    location.reload(false);
    $("#shutdown").html("Signing out of Intercom");
}

(function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", intercomSettings);
    } else {
        var d = document;
        var i = function () {
            i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
            i.q.push(args);
        };
        w.Intercom = i;
        function l() {
            var s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.intercom.io/widget/fyq3wodw";
            var x = d.getElementsByTagName("script")[0];
            x.parentNode.insertBefore(s, x);
        }
        if (w.attachEvent) {
            w.attachEvent("onload", l);
        } else {
            w.addEventListener("load", l, false);
        }
    }
})();

window.Intercom("boot", {
    app_id: "ck5zuvg4"
});

function eventExample(event) {
    Intercom("trackEvent", event);
}

function updateUser(name, email) {
    window.Intercom("update", {
        name: name,
        email: email
    });
}

function signOutExample() {
    window.Intercom("shutdown");
}

var retries = 0;
var launcherExist = setInterval(function () {
    if ($(".intercom-launcher-frame").length) {
        $(".checkmark").css({ display: "inline-block" });
        $(".still-no-messenger").hide();
        clearInterval(launcherExist);
    }
    retries += 1;
    if (retries >= 120) {
        clearInterval(launcherExist);
    }
}, 500);
