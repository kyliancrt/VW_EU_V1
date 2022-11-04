document.addEventListener('DOMContentLoaded', function () {

    // displayPrice
    function displayPrice() {
        let discountPercent = 1;
        let totalPrice = parseFloat($('#price').text());

        if (totalPrice >= 30) {
            $('.discount').addClass('enable');
        }
        else {
            $('.discount').removeClass('enable');
        }

        if (totalPrice >= 30) {
            discountPercent = 0.95;
            $('#discountPercent').text('-5%');
        }
        if (totalPrice >= 60) {
            discountPercent = 0.90;
            $('#discountPercent').text('-10%');
        }
        if (totalPrice >= 90) {
            discountPercent = 0.85;
            $('#discountPercent').text('-15%');
        }

    };
  
  displayPrice();

             $(".template-cart #downQuantity").click(function () {               
        let inputQuantity = $(this).parent().children('.quantity__input');
        let valQuantity = $(this).parent().children('.quantity__input').val();
        if (valQuantity > 1) {
            $(this).parent().children('.quantity__input').val(--valQuantity);
          $( "#btnUpdate" ).trigger( "click" );
        }
            });
              
    $(".template-cart #upQuantity").click(function () {
        let inputQuantity = $(this).parent().children('.quantity__input');
        let valQuantity = $(this).parent().children('.quantity__input').val();
        if (valQuantity < 999) {
            $(this).parent().children('.quantity__input').val(++valQuantity);
          $( "#btnUpdate" ).trigger( "click" );
        }
    });
              
});