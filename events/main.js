const rasm = document.getElementById("kun");
const tugma = document.getElementById("tugma");
const audio = document.getElementById("kunaudio");

let tun = false;

tugma.onclick = function () {

    if (tun == false) {

        rasm.src = "./tun.jpg";

        audio.src = "./tun.mp3";
        audio.play();

        tugma.textContent = "KUN ☀️";

        tun = true;

    } else {

        rasm.src = "./kun.jpg";

        audio.src = "./kun.mp3";
        audio.play();

        tugma.textContent = "TUN 🌑";

        tun = false;
    }
};