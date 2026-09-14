let menuBtn = document.querySelector(".menu-btn");
let links = document.querySelector(".links");
let logSig = document.querySelector(".log-sig");

menuBtn.onclick = function () {
    links.classList.toggle("active");
    logSig.classList.toggle("active");
};