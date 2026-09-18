const track = document.getElementById("track")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")


let currentIndex = 0

nextBtn.addEventListener("click",  ()=>{
    if (currentIndex < 3) {
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

