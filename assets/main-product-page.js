document.addEventListener('DOMContentLoaded', function () {

    // InstallPlay

    
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

    // displayPrice
    function displayPrice() {
        let discountPercent = 1;
        let valQuantity = $('#quantityCheckout').val();

        if (valQuantity >= 30) {
            $('.discount').addClass('enable');
        }
        else {
            $('.discount').removeClass('enable');
        }

        if (valQuantity >= 30) {
            discountPercent = 0.90;
            $('#discountPercent').text('-10%');
        }
        if (valQuantity >= 60) {
            discountPercent = 0.85;
            $('#discountPercent').text('-15%');
        }
        if (valQuantity >= 90) {
            discountPercent = 0.80;
            $('#discountPercent').text('-20%');
        }

        let discountPrice = (valQuantity * 2.99 * discountPercent).toFixed(2);
        let regularPrice = (valQuantity * 2.99).toFixed(2);
        $('#regularPrice').text(regularPrice);
        $('#price').text(discountPrice);

    };



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

  //urlPiece  
    let urlPiece = location.href.substring(location.href.indexOf('?') + 1);
    let shower = ['douche', 'shower'];
    let wall = ['mur', 'wall'];
    let bathroom = ['salledebain', 'bathroom'];
    let shower = ['douche', 'shower'];
    let floor = ['mur', 'floor'];
    let furniture = ['meuble', 'furniture'];
  
   var foundPresent = $.inArray('floor', floor) > -1;

  

       
       function loadFirstProduct() {         
         alert('test');        
       }       
       loadFirstProduct(); 
  
});
