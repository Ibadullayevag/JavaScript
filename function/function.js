// //* Function Declaration
// function ikkiSonVigindisi(a, b, c) {
// console. log(a + b + c);}
// ikkiSonYigindisi(2, 4, 40);
// function ayirma(a = 1, b = 2, c = 3) {
// console.log(a - b - c)
// ayirma ( )
// }

// //* Function Expression
// const ikkiSonYig = function (a, b, c) {
// console. log(a + b + c);}
// ikkiSonYig(1, 2, 3);

// //* Arrow Function
// const ayirmaa = (a, b, c) => a - b - c;
// console.log(ayirmaa (1, 2, 3))











//&_____________________________________________________________

function userData (){
    let ism = prompt ("Ismingizni kiriting")
    let familya = prompt("Familyangizni kiriting")
    let yosh = Number(prompt("Yoshingizni kiriting"))


    let malumoti = `Sizning ismingiz ${ism}, familyangiz ${familya} va yoshingiz ${yosh}da`


    console.log(malumoti)
}

userData()

//______________________________

function daraja(a) {
    return a**2
}


console.log(daraja(2))


//_________________________

function darajaa(b) {
    console.log( b ** 3)
    return "Return funksiyaga qaytaradi"
}

//darajaa(2)
console.log(darajaa(2))



//______________________

function qoshish (a,b) {
    return a + b;
}
console.log(qoshish (5,8))
console.log(qoshish(5)) //! Nan - Not a Number


//_______________________________
function tanishtir (ism, ...hobbilar) {
    return `${ism} sevimli mashgulotlari: ${hobbilar.join (", ")} larni sevadi!`
}

console.log(tanishtir ("Saidjon", "Dasturlash","Fudbol", "Roblox", "Anime"))


// ___________________________________________

