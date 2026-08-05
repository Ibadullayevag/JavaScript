
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
const sana = new Date ()
console.log(sana.toISOString)