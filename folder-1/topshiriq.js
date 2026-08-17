const darkButton = document.querySelector(".darkmod button");

darkButton.onclick = function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        darkButton.innerHTML = "<b>🌑 Dark Mode</b>";
    } else {
        darkButton.innerHTML = "<b>☀️ Light Mode</b>";
    }
};