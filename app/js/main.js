$(function() {

    /* для подключения звезд в отзывах */
    $(".rate-star").rateYo({
        starWidth: "12px",
        rating: 5,
        readOnly: true
    });
    /* для slider */
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function() {
        $('.header__box').toggleClass('active');
    });

    /* для подключения mixitup */
    var mixer = mixitup('.products__inner-box');

});