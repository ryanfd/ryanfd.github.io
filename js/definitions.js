function leave() {
    $(".sum-remainder img.sum-img").animate({opacity: 0}, {duration: 200, queue: false});
    $(".definition").animate({left: 0}, {duration: 200, queue: false});
    $(".definition").css("display", "block");
}

function hide() {
    $(".definition").css("display", "none");
}

function reset() {
    $(".definition").animate({left: "150%"}, {duration: 200, queue: false});
    $(".sum-remainder img.sum-img").animate({opacity: 1}, {duration: 200, queue: false});
    setTimeout(hide, 200);
}

// reset to starting display
$(".exit").click(function() {
    setTimeout(reset, 0);
});

$("#dirtying").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Dirtying");
    $("p.schooled-sum-definition").text("A process where Unity marks an object that needs to be redrawn/recalculated for the next frame.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#horizontal-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Horizontal Layout Group");
    $("p.schooled-sum-definition").text("Organize elements horizontally.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#grid-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Grid Layout Group");
    $("p.schooled-sum-definition").text("Organize items into a grid.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#vertical-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Vertical Layout Group");
    $("p.schooled-sum-definition").text("Organize objects vertically.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});