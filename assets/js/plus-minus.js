// // Quantity
// const quantity =document.querySelectorAll(".quantity")
// const plus = document.querySelector(".plus")
// const minus = document.querySelector(".minus");
// const num = document.querySelector(".num");

// window.addEventListener("load", ()=> {
//     if (localStorage["num"]) {
//         num.innerText = localStorage.getItem("num");
//     } 
//     else {
//         let a = "01";
//         num.innerText = a;
//     }
// });
// quantity.forEach((el) => {
//     const plus = document.querySelector(".plus")
//     const minus = document.querySelector(".minus");
//     plus?.addEventListener('click', function(){
//         const num = this.parentNode.querySelector("num");
//         if(num.value <20){
//             num.value = Number(num.value) + 1;
//         }
//     });
//     minus?.addEventListener('click', function(){
//         const num = this.parentNode.querySelector("num");
//         if(num.value >= 2){
//             num.value = Number(num.value) - 1;
//         }
//     });
// });

// plus.addEventListener("click", ()=> {
//     a = num.innerText;
//     a++;
//     a = (a < 10) ? "0" + a : a;
//     localStorage.setItem("num", a);
//     num.innerText = localStorage.getItem("num");
// });

// minus.addEventListener("click", ()=> {
//     a = num.innerText;
//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         localStorage.setItem("num", a);
//         num.innerText = localStorage.getItem("num");
//     }
// });
