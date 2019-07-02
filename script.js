const navBarModule = (() => {
    const navItems = document.querySelectorAll(".nav-item");
    const burgerBtn = document.querySelector(".header-burger");

    burgerBtn.addEventListener("click", function dropDown() {
        navItems.forEach((li) => {
            li.classList.toggle("active");
        });
    });
})();

const modalModule = (() => {
    const subscribeBtn = document.querySelector(".subscribe-btn");
    const modal = document.querySelector(".modal");
    const modalBg = document.querySelector(".bg-darken");
    const modalClose = document.querySelector(".modal-close");

    subscribeBtn.addEventListener("click", () => {
        modalBg.classList.add("bg-active");
    });

    modalClose.addEventListener("click", () => {
        modalBg.classList.remove("bg-active");
    });

    modalBg.addEventListener("click", (event) => {
        if (event.target === modalBg) {
            modalBg.classList.remove("bg-active");
        }
    });
})();