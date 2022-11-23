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

    // menuHamburger    
    if ($(window).width() < 1025) {
        $(".Header .menu-toggle").click(function () {
            $(this).toggleClass('opened');
            $('.Header .menuListHeader').toggleClass('opened');
        });
      
        $(".Header .menuHamburger .menuListHeader ul li").click(function () {
          setTimeout(function() {            
            $('.Header .menu-toggle').removeClass('opened');
            $('.Header .menuListHeader').removeClass('opened');
          }, 1000);
        });
    }
  
  //SearchDesktopHover
  $( ".searchHeaderDesktop button" ).click(function() {
    if( $(".searchHeaderDesktop").hasClass('active') {
    }
    else {
     e.preventDefault();
    $(".searchHeaderDesktop").addClass("active");
    }
});


});