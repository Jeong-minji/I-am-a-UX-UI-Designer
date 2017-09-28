var bar1 = 75;
var bar2 = 70;
var bar3 = 95;
var bar4 = 85;
var bar5 = 80;
var bar6 = 85;
var bar7 = 80;

$(window).ready(function() {
    $("#value1").html(bar1 + "%");
    $("#value2").html(bar2 + "%");
    $("#value3").html(bar3 + "%");
    $("#value4").html(bar4 + "%");
    $("#value5").html(bar5 + "%");
    $("#value6").html(bar6 + "%");
    $("#value7").html(bar7 + "%");
});

$(window).scroll(function() {
    if($(document).scrollTop() == 1360) {
        $("#bar1").animate({width: bar1+"%"}, 2000);
        $("#value1").animate({left: (bar1 + 6) + "%", opacity: "1"}, 2000);
        $("#bar2").delay(500).animate({width: bar2+"%"}, 2000);
        $("#value2").delay(500).animate({left: (bar2 + 7) + "%", opacity: "1"}, 2000);
        $("#bar3").delay(1000).animate({width: bar3+"%"}, 2000);
        $("#value3").delay(1000).animate({left: (bar3 + 1) + "%", opacity: "1"}, 2000);
        $("#bar4").delay(1500).animate({width: bar4+"%"}, 2000);
        $("#value4").delay(1500).animate({left: (bar4 + 4) + "%", opacity: "1"}, 2000);
        $("#bar5").delay(2000).animate({width: bar5+"%"}, 2000);
        $("#value5").delay(2000).animate({left: (bar5 + 5) + "%", opacity: "1"}, 2000);
        $("#bar6").delay(2500).animate({width: bar6+"%"}, 2000);
        $("#value6").delay(2500).animate({left: (bar6 + 4) + "%", opacity: "1"}, 2000);
        $("#bar7").delay(3000).animate({width: bar7+"%"}, 2000);
        $("#value7").delay(3000).animate({left: (bar7 + 5) + "%", opacity: "1"}, 2000);
    }
});

//3360
