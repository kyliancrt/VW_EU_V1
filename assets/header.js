document.addEventListener('DOMContentLoaded', function () {

    // // scrollTop
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() >= 3) {
    //         $(".Header").addClass('scroll');
    //     }
    //     else {
    //         $(".Header").removeClass('scroll');
    //     }
    // });

    // menuHamburge    
    if ($(window).width() < 1025) {
        $(".Header .menu-toggle").click(function () {
            $(this).toggleClass('opened');
            $('.Header .menuListHeader').toggleClass('opened');
        });
    }


});