document.addEventListener('DOMContentLoaded', function () {
    
    // InstallPlay
        let btnInstall = document.getElementById("btnInstall");
        let videoInstall = document.getElementById("videoInstall");

        btnInstall.addEventListener('click', function () {
            videoInstall.play();
            videoInstall.setAttribute("controls", "true");
            document.querySelector(".template-product .Install #btnInstall").style.display = "none";
            document.querySelector(".template-product .Install .btnInstall").style.display = "none";
            document.querySelector(".template-product .Install h2").style.display = "none";
        });

    // calculQuantity
        let calculA, calculB, calculC;
  calculC = 1;
    $(".inputsCalculQuantity input").change(function () {
        calculA = $('#inputA').val();
        calculB = $('#inputB').val();
        calculC = Math.ceil(calculA / 20) * Math.ceil(calculB / 20);
        $('#inputC').val(calculC);
        $('#quantityCheckout').val(calculC);
        displayPrice();
    });

    // changeQuantityCheckout
    $(".template-product #quantityCheckout").change(function () {
        if ($(this).val() < 1) {
            $(this).val('1')
        }
        else if ($(this).val() > 999) {
            $(this).val('999')
        }
        displayPrice();
    });

    $(".template-product #upQuantity").click(function () {
        let valQuantity = $('#quantityCheckout').val();
        if (valQuantity < 999) {
            $('#quantityCheckout').val(++valQuantity);
            displayPrice();
        }
    });
    $(".template-product #downQuantity").click(function () {
        let valQuantity = $('#quantityCheckout').val();
        if (valQuantity > 1) {
            $('#quantityCheckout').val(--valQuantity);
            displayPrice();
        }
    });

   


    // slideImage
    $(".template-product .productImage .arrows #productImagePrev").click(function () {

        let prevSlide = $('.template-product .productImage .pagination ul li.active').prev();
        let prevSlideId = $('.template-product .productImage .pagination ul li.active').prev().attr("id");
        if ($('.template-product .productImage .pagination ul li:first-child.active').hasClass('active')) {

        }
        else {
            $('.template-product .productImage').attr('class', 'productImage');
            $('.template-product .productImage .pagination ul li').removeClass('active');
            $('.template-product .productImage .slide').removeClass('active')
            $('.' + prevSlideId).addClass('active');
            $(prevSlide).addClass('active')
        }

    });

    $(".template-product .productImage .arrows #productImageNext").click(function () {

        let nextSlide = $('.template-product .productImage .pagination ul li.active').next();
        let nextSlideId = $('.template-product .productImage .pagination ul li.active').next().attr("id");
        if ($('.template-product .productImage .pagination ul li:last-child.active').hasClass('active')) {

        }
        else {
            $('.template-product .productImage .pagination ul li').removeClass('active');
        $('.template-product .productImage .slide').removeClass('active')
        $('.' + nextSlideId).addClass('active');
            $(nextSlide).addClass('active');
        }

    });

    $(".template-product .productImage .pagination ul li").click(function () {
        $('.template-product .productImage .pagination ul li').removeClass('active')
        $('.template-product .productImage .slide').removeClass('active')
        $('.' + this.id).addClass('active');
        $(this).addClass('active')
    });

  //buttonSample
  
    $(".template-product .btnSample").click(function () {
        $(".template-product #quantityCheckout").val("1");
        displayPrice();
      $('#btnCheckout').trigger('click');
    });

  //buttonCalculCheckout
    $(".template-product #btnCheckoutCalcul").click(function () {
        $(".template-product #quantityCheckout").val(calculC);
        displayPrice();
      $('#btnCheckout').trigger('click');
    });

  //trustSlide
   let splideTrust = new Splide('#splideTrust', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1025: { perPage: 2 },
            600: { perPage: 1 }
        },
        focus: 'left',
        autoplay: true,
        interval: 4000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '0',
    }).mount();


  
  function loadPiece() {  
          
    let kitchenArray = ['cuisine', 'kitchen'];
    let wallArray = ['mur', 'wall'];
    let bathroomArray = ['salledebain', 'bathroom'];
    let showerArray = ['douche', 'shower'];
    let floorArray = ['sol', 'floor'];
    let furnitureArray = ['meuble', 'furniture'];
    
    let urlPiece = location.href.substring(location.href.indexOf('?') + 1);
    let selectedPiece;
  
   if ($.inArray(urlPiece , kitchenArray) > -1) {
     selectedPiece = "slide1";
    }
   if ($.inArray(urlPiece , wallArray) > -1) {
     selectedPiece = "slide3";
    }
    
   if ($.inArray(urlPiece , bathroomArray) > -1) {
     selectedPiece = "slide4";
    }
    
   if ($.inArray(urlPiece , showerArray) > -1) {
     selectedPiece = "slide5";
    }
    
   if ($.inArray(urlPiece , floorArray) > -1) {
     selectedPiece = "slide6";
    }
   if ($.inArray(urlPiece , furnitureArray) > -1) {
     selectedPiece = "slide7";
    }
    
   else {
     selectedPiece = "slide1";
    }
        $('.template-product .productImage .pagination ul li').removeClass('active')
        $('.template-product .productImage .slide').removeClass('active')
        $('.' + selectedPiece).addClass('active');
        $('#' + selectedPiece).addClass('active')
          
  }
  
  loadPiece();
  

  
});

