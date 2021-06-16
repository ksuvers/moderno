$(function() {
    /* для подключения mixitup */
    var mixer = mixitup('.products__inner-box');
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
});