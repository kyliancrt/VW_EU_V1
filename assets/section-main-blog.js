// listFiltersHref

         $(".blocFilters ul li").not(".active").click(function() {
          let dataHref = $(this).children('a').data('href');
          location.href = dataHref + "?" + selectedPiece.toLowerCase();
        });

 if ($(window).width() < 1025) {
        $(".blocFilters li.active").click(function (event) {
            event.preventDefault();

            if ($(".blocFilters ul").hasClass("active")) {
                $(".blocFilters ul").removeClass("active");
            }
            else {
                $(".blocFilters ul").addClass("active");
            }
        });
        $(".Products").click(function () {
            $(".blocFilters ul").removeClass("active");
        });
    }