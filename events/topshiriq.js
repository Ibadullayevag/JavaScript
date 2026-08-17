const qizilchiroq = document.querySelector(".qizil-chiroq");
const sariqchiroq = document.querySelector(".sariq-chiroq");
const yashilchiroq = document.querySelector(".yashil-chiroq");

const ovoz = document.querySelector("#qizil-audio");

qizilchiroq.onclick = function () {
    qizilchiroq.style.width = "210px";
    qizilchiroq.style.height = "210px";

    ovoz.currentTime = 0;
    ovoz.play();
};