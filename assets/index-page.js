// SlideProduct

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 2,
        focus: 'center',
        autoplay: true,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '1%',
        throttle: 300
    }).mount();

    // InstallPlay

    let btnInstall = document.getElementById("btnInstall");
    let videoInstall = document.getElementById("videoInstall");

    btnInstall.addEventListener('click', function () {
        videoInstall.play();
        videoInstall.setAttribute("controls", "true");
        document.querySelector(".Index .Install span").style.display = "none";
        document.querySelector(".Index .Install h2").style.display = "none";
    });




});