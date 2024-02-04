let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let togel = document.getElementById("togel");

btn.addEventListener("click", function () {
  togel.classList.toggle("add");
});
btn2.addEventListener("click", function () {
  togel.classList.toggle("add");
});

let download = document.getElementById("download");

download.addEventListener("click", function () {
  window.print();
});
var typed = new Typed(".sec-text", {
  strings: ["Front End Developer", "Programmer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
