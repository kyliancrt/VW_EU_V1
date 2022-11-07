document.addEventListener('DOMContentLoaded', function () {

    // displayPrice
    function displayPrice() {
        let discountPercent = 1;
        let totalPrice = parseFloat($('#regularPrice').text());
        let totalQuantity = parseInt(totalPrice / 2.99);
      alert(totalPrice + " - " + totalQuantity);

        if (totalQuantity >= 30) {
            $('.productPrice').addClass('discountEnable');
        }
        else {
            $('.productPrice').removeClass('discountEnable');
        }

        if (totalQuantity >= 30) {
            discountPercent = 0.95;
            $('#discountPercent').text('-5%');
        }
        if (totalQuantity >= 60) {
            discountPercent = 0.90;
            $('#discountPercent').text('-10%');
        }
        if (totalQuantity >= 90) {
            discountPercent = 0.85;
            $('#discountPercent').text('-15%');
        }    
      
        let discountPrice = (totalPrice * discountPercent).toFixed(2);
        $('#totalPrice').text(discountPrice);
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