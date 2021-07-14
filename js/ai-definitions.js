function leave() {
    $(".sum-remainder img.sum-img").animate({opacity: 0}, {duration: 200, queue: false});
    $(".sum-remainder img.strict-img").animate({opacity: 0}, {duration: 200, queue: false});
    $(".definition").animate({left: 0}, {duration: 200, queue: false});
    $(".definition").css("display", "block");
}

function hide() {
    $(".definition").css("display", "none");
}

function reset() {
    $(".definition").animate({left: "150%"}, {duration: 200, queue: false});
    $(".sum-remainder img.sum-img").animate({opacity: 1}, {duration: 200, queue: false});
    $(".sum-remainder img.strict-img").animate({opacity: 1}, {duration: 200, queue: false});
    setTimeout(hide, 200);
}

// reset to starting display
$(".exit").click(function() {
    setTimeout(reset, 0);
});

$("#search-tree").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Search Tree");
    $("p.schooled-sum-definition").text("A search tree starts with a single root node that branches out to child (adjacent) nodes. In this project, each node represents an (x, y) coordinate of the corresponding maze instance. A list of adjacent nodes represents a path in the maze.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#agent").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Agent");
    $("p.schooled-sum-definition").text("An agent is the entity that traverses the search tree searching for a path to reach the goal.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#problem-space").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Problem Space");
    $("p.schooled-sum-definition").text("A problem space is a complete search tree. Every possible position and path is present in the problem space.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#uninformed-search").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Uninformed Search");
    $("p.schooled-sum-definition").text("Commonly referred to as blind search. The original style of search methods. For each iteration of the search algorithm, only the agent’s current position in the problem space is known. Therefore, the algorithm cannot traverse the search tree based on what it estimates to be the best decision.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#informed-search").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Informed Search");
    $("p.schooled-sum-definition").text("Using a heuristic function (a function that estimates distance to the goal for each node), informed search methods explore the problem space far more efficiently than uninformed search methods. Informed searches allow search algorithms to make smarter decisions about how to explore and expand the search tree, resulting in far more efficient search. This is done by combining real cost and estimated cost.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#expanded").click(function() {
    $("h4.ai-sum-definition").css("opacity", "0");
    $("p.ai-sum-definition").css("opacity", "0");
    $("h4.ai-sum-definition").text("Expansion");
    $("p.ai-sum-definition").text("Expanding a node in a search tree means generating its children. In other words, identifying all the tiles adjacent to the agent’s current position.");
    $("h4.ai-sum-definition").animate({opacity: 1}, 200);
    $("p.ai-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});

$("#prune").click(function() {
    $("h4.ai-sum-definition").css("opacity", "0");
    $("p.ai-sum-definition").css("opacity", "0");
    $("h4.ai-sum-definition").text("Pruning");
    $("p.ai-sum-definition").text("Pruning is the process of keeping track of all tiles visited in the maze and not exploring tiles of the maze that have already been visited. While it does require more memory for the algorithm to run, it can drastically decrease runtime as nodes of a search tree will not be reopened.");
    $("h4.ai-sum-definition").animate({opacity: 1}, 200);
    $("p.ai-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave, 0);
});