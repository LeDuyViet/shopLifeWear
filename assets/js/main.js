$(document).ready(function(){
    $('.multiple-banner').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span type="button" class="slick-prev"><span><i class="fas fa-arrow-right"></i></span></span>',
        nextArrow: '<span type="button" class="slick-next"><span><i class="fas fa-arrow-left"></i></span></span>',
    });
  });	