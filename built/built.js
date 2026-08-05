// 1) Agrumentsiz - joriy sana va vaqtni oladi
const hozir = new Date()
console.log(hozir)

// 2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
const sana1 = new Date(0); //1970-01-01TOO:00:00.000Z
const sana2 = new Date(1000 * 60 * 60); //Epoch'dan 1 soat keyin



const juma = new Date(2026, 7, 7); // 2026-yil 7-avgust - bu juma kuni
console.log(juma.getDate()); // 7 (oyning kuni)
console.log(juma.getDay()); // 5 (haftaning kuni - juma)










//^ 2.3. Yaxlitlash metodlari — round(), floor(), ceil(), trunc()

console.log(Math.round(4.4)); // 4 - eng yaqin butun songa yaxlitlaydi (0.5 va undan yuqori - yuqoriga)
console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4 (diqqat: manfiy sonlarda -4.5 -> -4, ya'ni yuqoriga yaxlitlanadi!)

console.log(Math.floor(4.9)); // 4 - har doim PASTGA yaxlitlaydi (kichraytiradi)
console.log(Math.floor(-4.1)); // -5 - manfiy sonlarda ham "pastga" (kichikroq tomonga)

console.log(Math.ceil(4.1)); // 5 - har doim YUQORIGA yaxlitlaydi (kattalashtiradi)
console.log(Math.ceil(-4.9)); // -4 - manfiy sonlarda ham "yuqoriga" (kattaroq tomonga)

console.log(Math.trunc(4.9)); // 4 - kasr qismini shunchaki "kesib tashlaydi" (yaxlitlamaydi)
console.log(Math.trunc(-4.9)); // -4 - Math.floor'dan farqli, faqat kasr qismini olib tashlaydi

// round, floor, ceil, trunc farqini bitta jadvalda ko'rish:
console.log(Math.round(2.5), Math.floor(2.5), Math.ceil(2.5), Math.trunc(2.5)); // 3 2 3 2
console.log(
  Math.round(-2.5),
  Math.floor(-2.5),
  Math.ceil(-2.5),
  Math.trunc(-2.5),
); // -2 -3 -2 -2










//^2.4. Eng katta/kichik va absolyut qiymat — max(), min(), abs()

console.log(Math.max(5, 10, 3, 8)); // 10 - berilgan sonlar orasidan eng kattasi
console.log(Math.min(5, 10, 3, 8)); // 3 - eng kichigi

console.log(Math.max()); // -Infinity - argumentsiz chaqirilsa
console.log(Math.min()); // Infinity

// Massiv bilan ishlatish uchun spread operator kerak (Math.max massiv qabul qilmaydi)
const sonlar = [45, 12, 78, 3, 99, 21];
console.log(Math.max(...sonlar)); // 99
console.log(Math.min(...sonlar)); // 3

// Yoki apply orqali (eski usul)
console.log(Math.max.apply(null, sonlar)); // 99

console.log(Math.abs(-15)); // 15 - absolyut qiymat (manfiy belgisini olib tashlaydi)
console.log(Math.abs(15)); // 15 - musbat songa ta'sir qilmaydi
console.log(Math.abs(-3.14)); // 3.14



//^2.5. Daraja va ildiz — pow(), sqrt(), cbrt()

console.log(Math.pow(2, 10)); // 1024 - 2 ning 10-darajasi (2**10 bilan bir xil)
console.log(Math.pow(5, 2)); // 25 - 5 ning kvadrati
console.log(Math.pow(2, 0.5)); // 1.414... - kvadrat ildizga teng (chunki 0.5-daraja = ildiz)

// Zamonaviy alternativa - "**" operatori (ES2016+), Math.pow() bilan bir xil natija beradi
console.log(2 ** 10); // 1024

console.log(Math.sqrt(25)); // 5 - kvadrat ildiz
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(-4)); // NaN - manfiy sonning kvadrat ildizi mavjud emas (haqiqiy sonlar orasida)

console.log(Math.cbrt(27)); // 3 - kub ildiz (27 = 3*3*3)
console.log(Math.cbrt(-8)); // -2 - kub ildiz manfiy sonlar uchun ham ishlaydi!

// Boshqa foydali Math metodlari (bonus):
console.log(Math.hypot(3, 4)); // 5 - gipotenuza uzunligi (Pifagor teoremasi: sqrt(3^2+4^2))
console.log(Math.log(Math.E)); // 1 - natural logarifm (asosi E)
console.log(Math.log2(8)); // 3 - 2 asosli logarifm (2^3=8)
console.log(Math.log10(1000)); // 3 - 10 asosli logarifm
console.log(Math.sign(-5)); // -1 - sonning belgisini qaytaradi (-1, 0, yoki 1)
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0











const jsonMAlumot = JSON.stringify(foydalanuvchi) //string qiladi

console.log(jsonMAlumot)
console.log(JSON.parse(jsonMAlumot))// stringli obyekt qiladi

console.log(typeof jsonMAlumot)