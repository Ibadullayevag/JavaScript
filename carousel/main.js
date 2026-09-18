const track = document.getElementById("track")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const card = document.querySelectorAll(".card")
const cardLength = card.length

let currentIndex = 0

const cardWidth = 200;

nextBtn.addEventListener("click",  ()=>{
    if (currentIndex < cardLength) {
        currentIndex++;
        updateCArousel();

    }
});

prevBtn.addEventListener("click",  ()=>{
    if (currentIndex >0) {
        currentIndex--;
        updateCArousel();

    }
});

function updateCArousel () {
    const moveAmount = -currentIndex * cardWidth;

    track.style.transform = `translateX(${moveAmount}px)`
}