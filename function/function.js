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
    console.log
}