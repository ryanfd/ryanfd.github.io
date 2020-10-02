// about nav hover
$("a#me").mouseenter(function() {
    $("hr#me").animate({opacity: "1"}, 1);
    $("hr#me").animate({width: "50%"}, 300);
});
$("a#me").mouseleave(function() {
    $("hr#me").animate({width: "0"}, 300);
    $("hr#me").animate({opacity: "0"}, 1);
});

// work nav hover
$("a#work").mouseenter(function() {
    $("hr#work").animate({opacity: "1"}, 1);
    $("hr#work").animate({width: "50%"}, 300);
});
$("a#work").mouseleave(function() {
    $("hr#work").animate({width: "0"}, 300);
    $("hr#work").animate({opacity: "0"}, 1);
});

// resume nav hover
$("a#resume").mouseenter(function() {
    $("hr#resume").animate({opacity: "1"}, 1);
    $("hr#resume").animate({width: "50%"}, 300);
});
$("a#resume").mouseleave(function() {
    $("hr#resume").animate({width: "0"}, 300);
    $("hr#resume").animate({opacity: "0"}, 1);
});

// contact nav hover
$("a#contact").mouseenter(function() {
    $("hr#contact").animate({opacity: "1"}, 1);
    $("hr#contact").animate({width: "50%"}, 300);
});
$("a#contact").mouseleave(function() {
    $("hr#contact").animate({width: "0"}, 300);
    $("hr#contact").animate({opacity: "0"}, 1);
});