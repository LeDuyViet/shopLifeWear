$(document).ready(function () {
    $('.multiple-banner').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span type="button" class="slick-prev"><span><i class="fas fa-arrow-right"></i></span></span>',
        nextArrow: '<span type="button" class="slick-next"><span><i class="fas fa-arrow-left"></i></span></span>',
    });
    $('.product-hot__content--slide').slick({
        infinite: false,
        autoplay: false,
        centerMode: false,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<span type="button" class="slick-prev"><span><i class="fas fa-chevron-right"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span></span>',
        nextArrow: '<span type="button" class="slick-next"><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="fas fa-chevron-left"></i></span></span>',
    });
    // EVENT
    // Lớp phủ
    $('.header__menu-left').mouseenter(function () {
        $('.header__menu--fade ').addClass('active--bg');
        // Khi đang ở category -> menu thì tắt cat đi
        $('.dropdown-menu').removeClass('active');
    })
    $('.header__menu-left').mouseleave(function () {
        $('.header__menu--fade').removeClass('active--bg');
    })
    // Ngôn ngữ
    $('.header__top-language').click(function () {
        $('.header__top-language__select').toggleClass('active');
    })
    // Search theo Category
    $('.header__search-category').click(function () {
        $('.dropdown-menu').toggleClass('active')
    })
    // Login
    $('.header__top-account').click(function () {
        $('.login').toggleClass('active')
    })
    // Cart
    $('.header__cart__icon').click(function () {
        $('.header__cart__content').addClass('active');
        console.log('mo cart');
    })
    $('.header__cart__content .close').click(function () {
        $('.header__cart__content').removeClass('active');
        console.log('dong cart');
    })

    // XỬ LÝ KHI CLICK RA NGOÀI
    $(window).click(function () {
        // Language
        if( $('.header__top-language__select.active').length > 0 ) {
            $('.header__top-language__select').removeClass('active');
        }
        // Search theo Category
        if( $('.dropdown-menu.active').length > 0 ) {
            $('.dropdown-menu').removeClass('active')
        }
        // Account
        if( $('.login.active').length > 0) {
            $('.login').removeClass('active')
        }
        // Cart
        if( $('.header__cart__content.active').length > 0) {
            $('.header__cart__content').removeClass('active')
            console.log('click ra ngoai cart');
        }
    });
    //  CHẶN SỰ KIỆN NỔI BỌT
    // Language
    $('.header__top-language').click(function (event) {
        event.stopPropagation();
    });
    // Search theo Category
    $('.header__search').click(function (event) {
        event.stopPropagation();
    })
    // Acount
    $('.header__top-account').click(function (event) {
        event.stopPropagation();
    })
    // Cart
    $('.header__cart__icon').click(function (event) {
        event.stopPropagation();
    })
    $('.header__cart__content__container').click(function (event) {
        event.stopPropagation();
    })

});