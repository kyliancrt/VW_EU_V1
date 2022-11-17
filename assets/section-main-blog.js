document.addEventListener('DOMContentLoaded', function () {

// listFiltersHref

         $(".blocFilters ul li").not(".active").click(function() {
          let dataHref = $(this).children('a').data('href');
          location.href = dataHref;
        });

 if ($(window).width() < 1025) {
        $(".blocFilters li.active").click(function() {

            if ($(".blocFilters ul").hasClass("active")) {
                $(".blocFilters ul").removeClass("active");
            }
            else {
                $(".blocFilters ul").addClass("active");
            }
        });
    }

                          
        });