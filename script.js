const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".header-burger");

burgerBtn.addEventListener("click", function dropDown() {
    nav.classList.toggle("active");
});