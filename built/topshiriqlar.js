
//30 ta Topshiriqlar: Built-in Objects

//Date and Time (1-8 topshiriqlar)

//1-topshiriq Hozirgi sana va vaqtni konsolga chiqaruvchi dastur yozing.
// const sana = new Date ()
// console.log(sana)

//2-topshiriq Hozirgi yilni konsolga chiqaruvchi dastur yozing.
// const hozirgiyil = new Date ().getFullYear()
// console.log(hozirgiyil)

//3-topshiriq Hozirgi oy raqamini (0-11 oralig'ida) konsolga chiqaruvchi dastur yozing.
// const oyRaqami = new Date().getMonth()
// console.log(oyRaqami)

//4-topshiriq Hozirgi kun raqamini (1-31 oralig'ida) konsolga chiqaruvchi dastur yozing.
// const hozirgiKUn = new Date().getDay()
// console.log(hozirgiKUn) 

//5-topshiriq Hozirgi sanani ISO formatda (YYYY-MM-DDTHH:mm:ss.sssZ) konsolga chiqaruvchi dastur yozing.
// const sana = new Date ()
// console.log(sana.toISOString)

//6-topshiriq 1970-yil 1-yanvardan hozirgi vaqtgacha bo'lgan millisekundlar sonini konsolga chiqaruvchi dastur yozing.
// console.log(Date.now())

//7-topshiriq Hozirgi sanani o'zbek tilida ko'rsatuvchi dastur yozing. (Intl.DateTimeFormat dan foydalaning)


//8-topshiriq Hozirgi vaqtga 5 soat qo'shib, yangi vaqtni konsolga chiqaruvchi dastur yozing.
// const vaqt = new Date().getHours() +5 ;
// console.log(vaqt)



//^Math Object (9-19 topshiriqlar)

//9-topshiriq Math.PI yordamida Pi sonini konsolga chiqaring.
// console.log(Math.PI)

//10-topshiriq 0 va 1 oralig'ida tasodifiy son hosil qiling va konsolga chiqaring.
// function tasodifiySon(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(tasodifiySon(0, 1))

//11-topshiriq 4.7 sonini eng yaqin butun songa yaxlitlang va natijani konsolga chiqaring.
// console.log(Math.round(4.7))

//12-topshiriq 4.9 sonini pastga (floor) yaxlitlang va natijani konsolga chiqaring.
//console.log(Math.floor(4.9))

//13-topshiriq 4.1 sonini yuqoriga (ceil) yaxlitlang va natijani konsolga chiqaring.
//console.log(Math.ceil(4.1))

//14-topshiriq [5, 10, 3, 8] massividagi eng katta sonni toping va konsolga chiqaring.
// let massiv = [5, 10, 3, 8]
// console.log(Math.max(...massiv))

//15-topshiriq [5, 10, 3, 8] massividagi eng kichik sonni toping va konsolga chiqaring.

//16-topshiriq -7 sonining absolut (modul) qiymatini toping va konsolga chiqaring.

//17-topshiriq 2 ning 3-darajasini hisoblang va konsolga chiqaring.

//18-topshiriq 16 ning kvadrat ildizini toping va konsolga chiqaring.

//19-topshiriq 27 ning kub ildizini toping va konsolga chiqaring.

