// listFiltersHref

         $(".template-collection .headerCollection .blocFilters ul li").not(".active").click(function() {
          let dataHref = $(this).children('a').data('href');
          location.href = dataHref + "?" + selectedPiece.toLowerCase();
        });