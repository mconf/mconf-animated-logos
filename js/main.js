$(function() {
    var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    $("#mconf-logo4").on(animationEndEvent, function() {
        if ($(this).hasClass("rollIn")) {
            $(this).removeClass("rollIn");
            $(this).addClass("rollOut");
        } else {
            $(this).removeClass("rollOut");
            $(this).addClass("rollIn");
        }
    });
    $("#mconf-logo5").on(animationEndEvent, function() {
        if ($(this).hasClass("zoomIn")) {
            $(this).removeClass("zoomIn");
            $(this).addClass("zoomOut");
        } else {
            $(this).removeClass("zoomOut");
            $(this).addClass("zoomIn");
        }
    });
    $("#mconf-logo6").on(animationEndEvent, function() {
        if ($(this).hasClass("flipInY")) {
            $(this).removeClass("flipInY");
            $(this).addClass("flipOutY");
        } else {
            $(this).removeClass("flipOutY");
            $(this).addClass("flipInY");
        }
    });
    $("#mconf-logo7").on(animationEndEvent, function() {
        if ($(this).hasClass("fadeIn")) {
            $(this).removeClass("fadeIn");
            $(this).addClass("fadeOut");
        } else {
            $(this).removeClass("fadeOut");
            $(this).addClass("fadeIn");
        }
    });
    $("#mconf-logo1").on(animationEndEvent, function() {
        var $logo = $("#mconf-logo1");
        $logo.removeClass("pulse");
        setTimeout(function() { $logo.addClass("pulse"); }, 50);
    });
    $("#mconf-logo2").on(animationEndEvent, function() {
        var $logo = $("#mconf-logo2");
        $logo.removeClass("flip");
        setTimeout(function() { $logo.addClass("flip"); }, 50);
    });
    $("#mconf-logo3").on(animationEndEvent, function() {
        var $logo = $("#mconf-logo3");
        $logo.removeClass("rubberBand");
        setTimeout(function() { $logo.addClass("rubberBand"); }, 50);
    });
});
