var stylishHTML = function (conf) {
    $("*").css("background", conf.background);
    $("*").css("color", conf.foreground);
    $("#logo").html(conf.greeting_text);
    $("#cheat li span:first-child").css("color", conf.background);

    if (tinycolor(conf.foreground).isLight()) {
        $("#cheat li span:first-child").css("background","rgba(200,200,200, 0.8)");
        $("#cheat li span:last-child ").css("background","rgba(0,0,0, 0.4)");
    } else {
        $("#cheat li span:first-child").css("background","rgba(0,0,0, 0.4)");
        $("#cheat li span:last-child ").css("background","rgba(200,200,200, 0.8)");
    }
};

$(function () {
    var conf = {};
    var notfavs = new RegExp("^:[u|s] (.*)$");
    var search = new RegExp("^:s (.*)$");
    var site = new RegExp("^:u (.*)$");
    var input = $("#box").val();

    $.getJSON("browser-newtab/web.json", function (object) {
        conf = object;
        populateList(object);
        $("#cheatp").slideDown();
        stylishHTML(object);
    });

    function populateList(object) {
        $.each(object.favourites, function (key, val) {
            linktxt = val.placeholder ? val.placeholder : val.url
            $("#cheat ul").append("<li><a href='" + val.url + "' target='_blank'><span>" + val.key + "</span><span>" + linktxt + "</span></a></li>");
        });

        $("ul li").sort(function (a, b) {
            return ($(a).width() < $(b).width()) ? -1 : ($(a).width() > $(b).width()) ? 1 : 0;
        }).appendTo("ul");
    }

    $("#box").keyup(function (event) {
        input = $(this).val();

        $("#cheat ul li").each(function () {
            $(this).addClass("dis");
            if ($(this).text().toLowerCase().indexOf(input.toLowerCase()) > -1) {
                $(this).removeClass("dis");
            }
        });
    });

    $("form").on("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var link = "";

        link = conf.search_engine + encodeURIComponent(input.replace(/^:s /g, ""));

        if (!~link.indexOf("http")) {
            link = "http://" + link;
        }

        window.open(link, "_blank");
        $("#box").blur();
        $("#box").val("");
        $("#box").trigger("keyup", { keyCode: 8, bubbles: true, cancelable: true })
    });
});
