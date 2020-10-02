$(document).on('click', 'a[href^="#"]', function (e) {
    if (navigator.userAgent.search("Edge") >= 0 || navigator.userAgent.search("MSIE") >= 0 || (navigator.userAgent.search("Safari") >= 0) && navigator.userAgent.search("Chrome") < 0) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 350, 'linear');
    }
});