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

$("#fellowship").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Fellowship");
    $("p.schooled-sum-definition").text("Game as a social framework. A community where the player is an active part of it. Almost exclusive for multiplayer games.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#challenge").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Challenge");
    $("p.schooled-sum-definition").text("Game as an obstacle course. Urge to master something. Boosts a game's replayability.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#people-fun").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("People Fun");
    $("p.schooled-sum-definition").text("Amusement from competition and cooperation.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#serious-fun").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Serious Fun");
    $("p.schooled-sum-definition").text("Excitement from changing the player and their world.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});