
//* String Methods

let matn = "Kecha juda kuchli shamol bo'ldi va tinmay 2 soat yomg'ir yog'di"
let kattaHarf = matn.toUpperCase()
console.log(kattaHarf)

let kichikHarf = matn.toLowerCase()
console.log(kichikHarf)

console.log(matn.indexOf("juda kuchli"))
console.log(matn.lastIndexOf("yomg'ir"))
console.log(matn)

console.log(matn.includes("shamolli"))//false
console.log(matn.startsWith("Kecha"))
console.log(matn.endsWith(" ")) //truue

console.log(matn.slice(0,7)) //Kecha j - bunda 0-indexdan boshlab 7 gacha qirqadi lekin 

