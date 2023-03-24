  //.....................top-header.......................
  // document.querySelector(".toggle").addEventListener("click", abc);
  // function abc() {
  //   document.querySelector(".right-side", ".background-layout").classList.add("active");
  // }

  // For Making Header Responsive
// const menu_btn = document.querySelector(".menu-btn");
// const close_btn = document.querySelector(".close-btn");
// const menu = document.querySelector(".menu");
// const drawer = menu.querySelector(".drawer");
// const blank = menu.querySelector(".blank");
// const body = document.querySelector("body");
// const close = () => {
//   menu.classList.remove("blur");
//   drawer.classList.remove("drawer-visible");
//   body.classList.remove("body");
// };

// menu_btn.addEventListener("click", (e) => {
//   menu.classList.add("blur");
//   drawer.classList.add("drawer-visible");
//   body.classList.add("body");
// });

// close_btn.addEventListener("click", (e) => {
//   close();
// });

// blank.addEventListener("click", (e) => {
//   close();
// });

// Array.from(drawer.querySelectorAll("a")).forEach((element) => {
//   element.addEventListener("click", () => {
//     close();
//   });
// });

   //..................countdown.....................
    
    // // Set the date we're counting down to
    // var countDownDate = new Date("May 1, 2023 00:00:00").getTime();
    
    // // Update the countdown every 1 second
    // var x = setInterval(function () {
    //   // Get today's date and time
    //   var now = new Date().getTime();
    
    //   // Find the distance between now and the countdown date
    //   var distance = countDownDate - now;
    
    //   // Calculate the days, hours, minutes and seconds left
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //   // Display the result in the HTML elements
    //   document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
    //   document.getElementById("hours").innerHTML = hours
    //     .toString()
    //     .padStart(2, "0");
    //   document.getElementById("minutes").innerHTML = minutes
    //     .toString()
    //     .padStart(2, "0");
    //   document.getElementById("seconds").innerHTML = seconds
    //     .toString()
    //     .padStart(2, "0");
    
    //   // If the countdown is over, show a message
    //   if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("countdown").innerHTML = "EXPIRED";
    //   }
    // }, 1000);
    
    // //...................................counter.....................

    // // Set the date we're counting down to
    // var countDownDate = new Date("May 1, 2023 00:00:00").getTime();
    
    // // Update the countdown every 1 second
    // var x = setInterval(function () {
    //   // Get today's date and time
    //   var now = new Date().getTime();
    
    //   // Find the distance between now and the countdown date
    //   var distance = countDownDate - now;
    
    //   // Calculate the days, hours, minutes and seconds left
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //   // Display the result in the HTML elements
    //   document.getElementById("day").innerHTML = days.toString().padStart(2, "0");
    //   document.getElementById("hour").innerHTML = hours
    //     .toString()
    //     .padStart(2, "0");
    //   document.getElementById("minute").innerHTML = minutes
    //     .toString()
    //     .padStart(2, "0");
    //   document.getElementById("second").innerHTML = seconds
    //     .toString()
    //     .padStart(2, "0");
    
    //   // If the countdown is over, show a message
    //   if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("counter").innerHTML = "EXPIRED";
    //   }
    // }, 1000);


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
// heart
const heartButtons = document.querySelectorAll(".add-to-favorite");

heartButtons.forEach((button) => {
	button.addEventListener("click", () => {
		button.classList.toggle("clicked");
	});
}); 

// sidebar
const button_wrap = document.querySelector(".btn-filter");
const sidebar = document.querySelector(".side-nav");
const overlay = document.querySelector(".overlay");
// const backbtn = document.querySelector(".back-nav");

// Add class to the element
// button_wrap.addEventListener('click', function () {
//  sidebar.classList.add('open');
//  overlay.classList.add('show');
// });

// backbtn.addEventListener('click', function () {
//  sidebar.classList.remove('open');
//  overlay.classList.remove('show');
// });

// overlay.addEventListener('click', function () {
//  sidebar.classList.remove('open');
//  overlay.classList.remove('show');
// });

// product page
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// product slider
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  thumbs: {
    swiper: swiper,
  },
});