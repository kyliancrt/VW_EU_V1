document.addEventListener('DOMContentLoaded', function () {

    //faqAccordeon
    $(".Product .faq .accordeonItem>span").click(function () {
        $(this).parent().toggleClass("active");
    });

    // InstallPlay

    let btnInstall = document.getElementById("btnInstall");
    let videoInstall = document.getElementById("videoInstall");

    btnInstall.addEventListener('click', function () {
        videoInstall.play();
        videoInstall.setAttribute("controls", "true");
        document.querySelector(".Product .Install span").style.display = "none";
        document.querySelector(".Product .Install h2").style.display = "none";
    });

    // calculQuantity
    $(".inputsCalculQuantity input").change(function () {
        let a, b, c;
        a = $('#inputA').val();
        b = $('#inputB').val();
        c = Math.ceil(a / 20) * Math.ceil(b / 20);
        $('#inputC').val(c);
        $('#quantityCheckout').val(c);
        displayPrice();
    });

    // changeQuantityCheckout
    $(".Product #quantityCheckout").change(function () {
        if ($(this).val() < 1) {
            $(this).val('1')
        }
        else if ($(this).val() > 999) {
            $(this).val('999')
        }
        displayPrice();
    });

    $(".Product #upQuantity").click(function () {
        let valQuantity = $('#quantityCheckout').val();
        if (valQuantity < 999) {
            $('#quantityCheckout').val(++valQuantity);
            displayPrice();
        }
    });
    $(".Product #downQuantity").click(function () {
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
            discountPercent = 0.95;
            $('#discountPercent').text('-5%');
        }
        if (valQuantity >= 60) {
            discountPercent = 0.90;
            $('#discountPercent').text('-10%');
        }
        if (valQuantity >= 90) {
            discountPercent = 0.85;
            $('#discountPercent').text('-15%');
        }

        let discountPrice = (valQuantity * 2.99 * discountPercent).toFixed(2);
        let regularPrice = (valQuantity * 2.99).toFixed(2);
        $('#regularPrice').text(regularPrice);
        $('#price').text(discountPrice);

    };



    // slideImage
    $(".Product .productImage .arrows #productImagePrev").click(function () {

        let prevSlide = $('.Product .productImage .pagination ul li.active').prev();
        let prevSlideId = $('.Product .productImage .pagination ul li.active').prev().attr("id");
        if ($('.Product .productImage .pagination ul li:first-child.active').hasClass('active')) {

        }
        else {
            $('.Product .productImage').attr('class', 'productImage');
            $('.Product .productImage .pagination ul li').removeClass('active')
            $('.Product .productImage').addClass(prevSlideId);
            $(prevSlide).addClass('active')
        }

    });

    $(".Product .productImage .arrows #productImageNext").click(function () {

        let nextSlide = $('.Product .productImage .pagination ul li.active').next();
        let nextSlideId = $('.Product .productImage .pagination ul li.active').next().attr("id");
        if ($('.Product .productImage .pagination ul li:last-child.active').hasClass('active')) {

        }
        else {
            $('.Product .productImage').attr('class', 'productImage');
            $('.Product .productImage .pagination ul li').removeClass('active')
            $('.Product .productImage').addClass(nextSlideId);
            $(nextSlide).addClass('active')
        }

    });

    $(".Product .productImage .pagination ul li").click(function () {
        $('.Product .productImage').attr('class', 'productImage');
        $('.Product .productImage .pagination ul li').removeClass('active')
        $('.Product .productImage').addClass(this.id);
        $(this).addClass('active')
    });



});