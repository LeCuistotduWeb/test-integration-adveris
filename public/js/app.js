$(function () {
    // hide menu if window. width > 768 
    $(window).resize(function () {
        if ($(window).width() > 992) {
            $('#navbarMobile').removeClass('show');
        };
    });
});