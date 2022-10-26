document.addEventListener('DOMContentLoaded', function () {

    // VideoPresentationMedia
    let mainVideo = $('.template-index .Presentation video');
    let mobileSrc = "https://cdn.shopify.com/videos/c/o/v/e08cb0efd32040f791a7a193a2b98380.mp4";
    let desktopSrc = "https://cdn.shopify.com/s/files/1/0567/1220/0371/files/VYNIL_WAY_FILM_MASTER_V5_AVEC_MUSIQUE_6_1.mp4?v=1643878330";

    if ($(window).width() < 750) {
        mainVideo.append("<source type='video/mp4' src='" + mobileSrc + "' />");
    } else {
        mainVideo.append("<source type='video/mp4' src='" + desktopSrc + "' />");
    }


    // SlideProducts
    let splideProducts = new Splide('#splideProducts', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1025: { perPage: 2 }
        },
        focus: 'center',
        autoplay: true,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '1%',
        throttle: 300
    }).mount();

    // SlideProductsBackground
    splideProducts.on('move', function () {
        let newColor = $('.template-index .SlideProducts ul li.is-active').data("color");
        $('.template-index .SlideProducts').css('background-color', newColor)
    });

    // SlideCollections
    let splideCollections = new Splide('#splideCollections', {
        type: 'loop',
        perPage: 4,
        breakpoints: {
            1400: { perPage: 3 },
            1025: { perPage: 1 }
        },
        focus: 'center',
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        pagination: false,
        padding: '0',
    }).mount();


    // SlideRealisations
    var splideRealisations = new Splide('#splideRealisations', {
        type: 'loop',
        perPage: 3,
        breakpoints: {
            1025: { perPage: 1 }
        },
        focus: 'center',
        autoplay: true,
        interval: 8000,
        updateOnMove: true,
        pagination: false,
        padding: '0',
    }).mount();

    // InstallPlay
    if ($(window).width() < 1025) {
        let btnInstall = document.getElementById("btnInstall");
        let videoInstall = document.getElementById("videoInstall");

        btnInstall.addEventListener('click', function () {
            videoInstall.play();
            videoInstall.setAttribute("controls", "true");
            document.querySelector(".template-index .Install #btnInstall").style.display = "none";
            document.querySelector(".template-index .Install h2").style.display = "none";
        });
    }
    else {
        videoInstall.setAttribute("autoplay", "true");
    }



});