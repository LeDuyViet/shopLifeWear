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
        prevArrow: '<span type="button" class="slick-prev"><span><i class="fas fa-arrow-left"></i></span></span>',
        nextArrow: '<span type="button" class="slick-next"><span><i class="fas fa-arrow-right"></i></span></span>',

    });
    $('.product-hot__content--slide').slick({
        infinite: false,
        autoplay: false,
        centerMode: false,
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<span type="button" class="slick-prev"><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="fas fa-chevron-left"></i></span></span>',
        nextArrow: '<span type="button" class="slick-next"><span><i class="fas fa-chevron-right"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span></span>',
        responsive: [
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            }
        ]
    });
    // EVENT
    // Lớp phủ
    $('.header__menu-left').mouseenter(function () {
        $('.header__menu--fade ').addClass('active--bg');
        console.log("them class");
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
        $('.header__cart__content__container').addClass('active');
        if ($('.header__menu-left__container.menu-mobile-pull-right').length > 0) {
            $('.header__menu-left__container').removeClass('menu-mobile-pull-right');
        }
        console.log('mo cart');
    })
    $('.header__cart__content__container .close').click(function () {
        $('.header__cart__content').removeClass('active');
        $('.header__cart__content__container').removeClass('active');

        console.log('dong cart');
    })
    // Menu-mobile
    $('.header__menu__btn--mobile').click(function () {
        $('.header__menu-left__container').toggleClass('menu-mobile-pull-right');
        $('.header__menu--fade').toggleClass('active--bg');
        console.log("them class...");
    })
    $('.menu-close-mobile').click(function () {
        $('.header__menu-left__container').removeClass('menu-mobile-pull-right')
        $('.header__menu--fade').removeClass('active--bg');
    })


    // XỬ LÝ KHI CLICK RA NGOÀI
    $(window).click(function () {
        // Language
        if ($('.header__top-language__select.active').length > 0) {
            $('.header__top-language__select').removeClass('active');
        }
        // Search theo Category
        if ($('.dropdown-menu.active').length > 0) {
            $('.dropdown-menu').removeClass('active')
        }
        // Account
        if ($('.login.active').length > 0) {
            $('.login').removeClass('active')
        }
        // Cart
        if ($('.header__cart__content.active').length > 0) {
            $('.header__cart__content').removeClass('active')
            $('.header__cart__content__container').removeClass('active')
            console.log('click ra ngoai cart');
        }
        // Menu
        if ($('.header__menu-left__container.menu-mobile-pull-right').length > 0) {
            $('.header__menu-left__container').removeClass('menu-mobile-pull-right')
            $('.header__menu--fade').removeClass('active--bg');

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
    // Menu
    $('.header__menu__btn--mobile').click(function (event) {
        event.stopPropagation();
    })
    $('.header__menu-left__container').click(function (event) {
        event.stopPropagation();
    })


    // var lastId;
    // var isLoading = false;
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
    //         console.log('loading', isLoading);
    //         if (!isLoading) {
    //             isLoading = true;
    //             lastId = $('.product-item').last().attr('data-id');
    //             if (lastId === undefined)
    //                 lastId = 1;
    //             $.ajax('https://fakestoreapi.com/products/' + (parseInt(lastId) + 1), {
    //                 method: 'GET',
    //                 dataType: 'json',
    //                 success: function (res) {
    //                     $('.product__today-content').append(`
    //                 <div class="product-item" data-id=${res.id}>
    //                 <div class="product-item__img">
    //                 <img src="${res.image}" alt="">
    //                 </div>
    //                 <div class="product-item__detail">
    //                 <h3>${res.title}</h3>
    //                 <h3>${res.category}</h3>
    //                 <div class="product-item__detail-price">
    //                 <span class="price">${res.price}₫</span>
    //                 <span class="old_price">${parseInt(res.price) + 1000}₫</span>
    //                 </div>
    //                 </div>
    //                 </div>
    //                 `);
    //                     isLoading = false;
    //                 },
    //                 error: function (res) { isLoading = true; }
    //             })
    //         }
    //     }
    // });

    // scroll
    if ($(window).width() < 739) {
        var isLoading = false;
        var lastId;
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() + 200 >= $(document).height()) {
                var lastId = $('.product-item').last().attr('data-id');
                if (lastId === undefined)
                    lastId = 1;
                if (!isLoading) {
                    isLoading = true;
                    $('.lds-dual-ring').addClass('flex');
                    $.ajax('https://fakestoreapi.com/products/' + (parseInt(lastId) + 1), {
                        method: 'GET',
                        dataType: 'json',
                        success: function (res) {
                            if (res) {
                                $('.product__today-content').append(`<div class="product-item" data-id="${res.id}">
                            <div class="product-item__img">
                            <img src="${res.image}" alt="">
                            </div>
                            <div class="product-item__detail">
                            <h3>${res.title}</h3>
                            <div class="product-item__detail-price">
                            <span class="price">${res.price}</span>
                            <span class="old_price">${res.price}</span>
                            </div>
                            </div>
                            </div>`
                                )
                                isLoading = false;
                            }
                            $('.lds-dual-ring').removeClass('flex');

                        },
                        error: function (res) { isLoading = false }
                    })
                }
            }
        })
    };

});