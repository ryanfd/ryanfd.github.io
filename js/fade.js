// logo
$(document).ready(function() {
    $(".big-logo").hide().delay(750).fadeIn(1000);
    setTimeout(slide, 1750)
  });

// headline text
$(document).ready(function(){
    $(".headline h1").delay(2250).animate({opacity: "1"}, 2000);
    $(".headline p#game").delay(3250).animate({opacity: "1"}, 2000);
});

// scroll arrow
$(document).ready(function() {
  setTimeout(arrowSlide, 3750)
});

// simultaneous animation
function slide() {     
  $(".big-logo").animate({right: '10%'}, { duration: 500, queue: false }, "ease-in-out");
  $(".big-logo").animate({marginRight: '0'}, { duration: 500, queue: false }, "ease-in-out");
}

function arrowSlide() {
  $(".arrow").animate({opacity: 1}, {duration: 500, queue: false}, "ease-in-out");
  $(".underline").animate({bottom: "5%"}, {duration: 500, queue: false}, "ease-in-out");
}