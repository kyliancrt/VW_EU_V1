document.addEventListener('DOMContentLoaded', function () {

  
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