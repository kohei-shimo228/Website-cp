const swiper = new Swiper(".l-video__swiper", {
    loop:false,
    slidesPerView:5,

    wrapperClass: "p-swiper",
    slideClass: "p-swiper__slide",

    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    },
    spaceBetween: 40,
    
});


//slidesPerView:5 でいい感じに5個だけ表示してくれる