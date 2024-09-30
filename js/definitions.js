function leave_sum() {
    $(".sum-remainder img.sum-img").animate({opacity: 0}, {duration: 200, queue: false});
    $(".definition").animate({left: 0}, {duration: 200, queue: false});
    $(".definition").css("display", "block");
}
function leave_body1() {
    $(".sum-remainder img.sum-img-body").animate({opacity: 0}, {duration: 200, queue: false});
    $(".definition-body").animate({left: 0}, {duration: 200, queue: false});
    $(".definition-body").css("display", "block");
}
function leave_body2() {
    $(".sum-remainder img.sum-img-body2").animate({opacity: 0}, {duration: 200, queue: false});
    $(".definition-body2").animate({left: 0}, {duration: 200, queue: false});
    $(".definition-body2").css("display", "block");
}

function hide() {
    $(".definition").css("display", "none");
}
function hide_body() {
    $(".definition-body").css("display", "none");
}
function hide_body2() {
    $(".definition-body2").css("display", "none");
}

function reset() {
    $(".definition").animate({left: "150%"}, {duration: 200, queue: false});
    $(".sum-remainder img.sum-img").animate({opacity: 1}, {duration: 200, queue: false});
    setTimeout(hide, 200);
}
function reset_body() {
    $(".definition-body").animate({left: "150%"}, {duration: 200, queue: false});
    $(".sum-remainder img.sum-img-body").animate({opacity: 1}, {duration: 200, queue: false});
    setTimeout(hide_body, 200);
}
function reset_body2() {
    $(".definition-body2").animate({left: "150%"}, {duration: 200, queue: false});
    $(".sum-remainder img.sum-img-body2").animate({opacity: 1}, {duration: 200, queue: false});
    setTimeout(hide_body2, 200);
}

// reset to starting display
$(".exit").click(function() {
    setTimeout(reset, 0);
});
$(".exit-body").click(function() {
    setTimeout(reset_body, 0);
});
$(".exit-body2").click(function() {
    setTimeout(reset_body2, 0);
});


$("#dirtying").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Dirtying");
    $("p.schooled-sum-definition").text("A process where Unity marks an object that needs to be redrawn/recalculated for the next frame.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave_sum, 0);
});

$("#horizontal-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Horizontal Layout Group");
    $("p.schooled-sum-definition").text("Organize elements horizontally.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave_sum, 0);
});

$("#grid-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Grid Layout Group");
    $("p.schooled-sum-definition").text("Organize items into a grid.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave_sum, 0);
});

$("#vertical-layout-group").click(function() {
    $("h4.schooled-sum-definition").css("opacity", "0");
    $("p.schooled-sum-definition").css("opacity", "0");
    $("h4.schooled-sum-definition").text("Vertical Layout Group");
    $("p.schooled-sum-definition").text("Organize objects vertically.");
    $("h4.schooled-sum-definition").animate({opacity: 1}, 200);
    $("p.schooled-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave_sum, 0);
});

$("#class-diagram").click(function() {
    $("h4.layout-group-sum-definition").css("opacity", "0");
    $("p.layout-group-sum-definition").css("opacity", "0");
    $("h4.layout-group-sum-definition").text("Class Diagram");
    $("p.layout-group-sum-definition").text("A diagram that describes the structure of a system using the system's classes, attributes, methods, and the relationships among objects.");
    $("h4.layout-group-sum-definition").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition").animate({opacity: 1}, 200);
    setTimeout(leave_body1, 0);
});

$("#strategy-pattern").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Strategy Pattern");
    $("p.layout-group-sum-definition2").text("The strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives runtime instructions as to which in a family of algorithms to use.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});

$("#interface").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Interface");
    $("p.layout-group-sum-definition2").text("An interface is a data type that acts as an abstraction of a class. It describes a set of method signatures, the implementations of which may be provided by multiple classes that are otherwise not necessarily related to each other.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});

$("#dependency-injection").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Dependency Injection");
    $("p.layout-group-sum-definition2").text("Dependency injection is a technique where an object receives other objects that it requires, as opposed to creating them internally. It separates the concerns of constructing objects and using them, leading to loosely coupled programs.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});

$("#constructor-injection").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Constructor Injection");
    $("p.layout-group-sum-definition2").text("The most common form of dependency injection. Dependencies are requested through the constructor.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});

$("#hashset").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("HashSet");
    $("p.layout-group-sum-definition2").text("A HashSet is an unordered collection containing unique elements. It has the standard collection operations (Add(), Remove(), Contains()), but since it uses a hash-based implementation, these operations are O(1).");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});


$("#instance-id").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Instance ID");
    $("p.layout-group-sum-definition2").text("The instance ID of an object acts like a handle to the in-memory instance. It is always unique, and never has the value 0.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});

$("#event").click(function() {
    $("h4.layout-group-sum-definition2").css("opacity", "0");
    $("p.layout-group-sum-definition2").css("opacity", "0");
    $("h4.layout-group-sum-definition2").text("Event");
    $("p.layout-group-sum-definition2").text("Events enable a class to notify other classes when something of interest occurs. The class that raises/invokes the event is called the publisher and the classes that receive/handle the event are called subscribers.");
    $("h4.layout-group-sum-definition2").animate({opacity: 1}, 200);
    $("p.layout-group-sum-definition2").animate({opacity: 1}, 200);
    setTimeout(leave_body2, 0);
});