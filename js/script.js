const lg = document.querySelectorAll(".lg button")
lg.forEach(element => {
    element.addEventListener("click", function() {
        lg.forEach(lgs => lgs.classList.remove(("active")))
        this.classList.add("active")
    });
});

$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        loop: true,
        pauseOnHover: true,
        prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
        nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});