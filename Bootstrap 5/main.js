const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});