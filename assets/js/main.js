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



// document.querySelectorAll(".remove").forEach(removebtn => removebtn.addEventListener("click", removeProduct));
// total();


// function removeProduct() {
// 	this.parentElement.parentElement.removeChild(this.parentElement);
// 	total();
// }

//js
const plusMinus = document.querySelectorAll('.plus-minus');
plusMinus.forEach((element) => {
  const addButton = element.querySelector('.plus');
  const subButton = element.querySelector('.minus');
  addButton?.addEventListener('click', function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value < 20) {
      inputEl.value = Number(inputEl.value) + 1;
    }
  });
  subButton?.addEventListener('click', function () {
    const inputEl = this.parentNode.querySelector("input[type='number']");
    if (inputEl.value >= 2) {
      inputEl.value = Number(inputEl.value) - 1;
    }
  });
});