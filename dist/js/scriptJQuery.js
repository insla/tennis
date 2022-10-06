$(document).ready(function(){
    $('.coach__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    });
});