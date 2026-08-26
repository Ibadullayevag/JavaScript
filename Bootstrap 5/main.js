const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

loginBtn.onclick = function () {
    modal.style.display = "flex";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};