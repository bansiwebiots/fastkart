// ...........instagram..............
var swiper = new Swiper(".instagram-slider", {
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });


  //................. product.........
var swiper = new Swiper(".product-arrow", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: { 
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  //............. new arrival............
var swiper = new Swiper(".product-arrival", {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // .................banner-slider..............
var swiper = new Swiper(".banner-slider", {
    spaceBetween: 10,
    slidesPerView: 5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  // ...............shop-slider,...........
var swiper = new Swiper(".shop-slider", {
    slidesPerView: 7,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      575: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  });

  //........................ deals-slider....................
var swiper = new Swiper(".deals-slider", {
    loop: true,
     breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      675: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1183: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });


// product slider
var swiper = new Swiper(".sub-img", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      675: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  var swiper2 = new Swiper(".main-img", {
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });