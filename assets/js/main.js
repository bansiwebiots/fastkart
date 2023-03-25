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

// heart
const heartButtons = document.querySelectorAll(".add-to-favorite");

heartButtons.forEach((button) => {
	button.addEventListener("click", () => {
		button.classList.toggle("clicked");
	});
}); 

// sidebar
let button_wrap = document.querySelector(".btn-filter");
let sidebar = document.querySelector(".side-nav");
let overlay = document.querySelector(".overlay");
let backbtn = document.querySelector(".back-nav");

// Add class to the element
button_wrap.addEventListener("click", () => {
 sidebar.classList.add('open');
 overlay.classList.add('show');
});

backbtn.addEventListener("click", () => {
 sidebar.classList.remove('open');
 overlay.classList.remove('show');
});

overlay.addEventListener("click", () => {
 sidebar.classList.remove('open');
 overlay.classList.remove('show');
});


/*====================
 Range js
=======================*/
const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "%100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

// Quantity
const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");

window.addEventListener("load", ()=> {
    if (localStorage["num"]) {
        num.innerText = localStorage.getItem("num");
    } else {
        let a = "01";
        num.innerText = a;
    }
});

plus.addEventListener("click", ()=> {
    a = num.innerText;
    a++;
    a = (a < 10) ? "0" + a : a;
    localStorage.setItem("num", a);
    num.innerText = localStorage.getItem("num");
});

minus.addEventListener("click", ()=> {
    a = num.innerText;
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        localStorage.setItem("num", a);
        num.innerText = localStorage.getItem("num");
    }
});