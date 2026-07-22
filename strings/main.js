// ===================================================
// STRING METODLARI BO'YICHA IMTIHON TOPSHIRIQLARI
// ===================================================
// Jami: 100 ta topshiriq
// 10 ta oson | 30 ta o'rtacha | 40 ta qiyinroq | 20 ta qiyin
// ===================================================

// ===================================================
// 1. OSON TOPSHIRIQLAR (10 ta)
// ===================================================

//* 1.1. Berilgan matnni barcha harflarini katta harflarga o'zgartiring.
// Input: "salom dunyo"add
// Kutilyotgan natija: "SALOM DUNYO"
// let matn = "salom dunyo"

// let natija = matn.toUpperCase()
// console.log(natija)

//* 1.2. Berilgan matnning uzunligini toping.
// Input: "JavaScript"
// Kutilyotgan natija: 10
// let matn ="JavaScript"
// console.log(matn.length)

//* 1.3. Berilgan matnning 5-indeksidagi belgini qaytaring.
// Input: "Dasturlash"
// Kutilyotgan natija: "r"
// let matn = "Dasturlash"
// console.log(matn[5])

//* 1.4. Berilgan matn "Hello" so'zi bilan boshlanishini tekshiring.
// Input: "Hello world"
// Kutilyotgan natija: true

// let matn = "Hello world"
// console.log(matn.startsWith("Hello"))

//* 1.5. Berilgan matnni barcha harflarini kichik harflarga o'zgartiring.
// Input: "WEB DASTURLASH"
// Kutilyotgan natija: "web dasturlash"
// let matn = "WEB DASTURLASH"
// console.log(matn.toLowerCase())

//* 1.6. Berilgan matnning 3-indeksidagi belgini charAt() yordamida oling.
// Input: "Kompyuter"
// Kutilyotgan natija: "p"
// let matn = "Kompyuter"
// console.log(matn.charAt(3))

//* 1.7. Berilgan matndagi bo'shliqlarni olib tashlang (trim).
// Input: "   Salom   "
// Kutilyotgan natija: "Salom"
// let matn = "   Salom   "
// console.log(matn.trim())

//* 1.8. Berilgan matn "!" bilan tugashini tekshiring.
// Input: "Assalomu alaykum!"
// Kutilyotgan natija: true
// let matn = "Assalomu alaykum!"
// console.log(matn.endsWith("!"))

//* 1.9. Berilgan matn ichida "js" so'zi borligini tekshiring.
// Input: "Men js o'rganyapman"
// Kutilyotgan natija: true
// let matn = "Men js o'rganyapman"
// console.log( matn.includes ("js"))

//* 1.10. Berilgan matnni 3 marta takrorlang.
// Input: "ha"
// Kutilyotgan natija: "hahaha"
// let matn = "ha"
// console.log(matn.repeat(3))

// ===================================================
// 2. O'RTACHA TOPSHIRIQLAR (30 ta)
// ===================================================

//* 2.1. Berilgan ism va familiyani birlashtirib, to'liq ism hosil qiling.
// Input: "Ali", "Karimov"
// Kutilyotgan natija: "Ali Karimov"
// let ism = "Ali"
// let familiya = "Karimov"
// console.log(ism + " " + familiya)

//* 2.2. Berilgan matnning birinchi harfini katta qiling.
// Input: "javascript"
// Kutilyotgan natija: "Javascript"
// let matn = "javascript"
// let birinchiHarf = matn[0].toUpperCase() + matn.slice(1)
// console.log(birinchiHarf)

//* 2.3. Berilgan matnni so'zlarga ajrating (bo'shliq bo'yicha).
// Input: "Men dastur yozaman"
// Kutilyotgan natija: ["Men", "dastur", "yozaman"]
// let matn = "Men dastur yozaman"
// let natija = matn.split(" ")
// console.log(natija)


//* 2.4. Berilgan matndagi barcha "a" harflarini "o" ga almashtiring.
// Input: "salom"
// Kutilyotgan natija: "solom"
//  m

//* 2.5. Berilgan matnning oxirgi 4 ta belgisini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "lash"
// let matn = "Dasturlash"
// let natija = matn.slice (-4)
// console.log (natija)

//* 2.6. Berilgan matndan "world" so'zini kesib oling.
// Input: "Hello world"
// Kutilyotgan natija: "world"
// let matn = "Hello world"
// let natija =matn.slice(6)
// console.log(natija)

//* 2.7. Berilgan emaildan @ belgisidan keyingi qismni oling.
// Input: "ali@gmail.com"
// Kutilyotgan natija: "gmail.com"
//  let email = "ali@gmail.com";
//  let natija = email.slice(4)
//  console.log(natija)

//* 2.8. Berilgan matnni teskari tartibda yozing.
// Input: "JavaScript"
// Kutilyotgan natija: "tpircSavaJ"
// let matn = "JavaScript"
// let natija = matn.split()
// console.log(natija)

//* 2.9. Berilgan matnning uzunligi 10 dan katta yoki kichikligini tekshiring.
// Input: "Dasturlash"
// Kutilyotgan natija: false
// let matn = "Dasturlash"
// let natija = matn.length > 10
// console.log(natija)

//* 2.10. Berilgan matndagi "olma" so'zini "anor" ga almashtiring.
// Input: "Men olma yedim"
// Kutilyotgan natija: "Men anor yedim"

// let matn = "men olma yedim"
// let natija = matn.replace("olma","anor")
// console.log(natija)

// 2.11. Berilgan matndagi barcha raqamlarni toping.
// Input: "Narx: 15000 so'm"
// Kutilyotgan natija: ["15000"]

//* 2.12. Berilgan matnni array elementlaridan birlashtiring.
// Input: ["Men", "o'qiyman"], " "
// Kutilyotgan natija: "Men o'qiyman"
// let matn = ["Men", "o'qiyman"]
// let natija = matn.join(" ")
// console.log(natija)

//* 2.13. Berilgan matnning 2-indeksidan 6-indeksigacha bo'lgan qismini oling.
// Input: "Dasturlash"
// Kutilyotgan natija: "sturl"
// let text = "Dasturlash";
// console.log(text.slice(2, 7))

//! 2.14. Berilgan matn faqat harflardan iboratligini tekshiring.
// Input: "Salom123"
// Kutilyotgan natija: false

//* 2.15. Berilgan matnning boshidagi va oxiridagi bo'shliqlarni olib tashlang.
// Input: "   JavaScript   "
// Kutilyotgan natija: "JavaScript"
// let text = "   JavaScript   ";

// console.log(text.trim())

//* 2.16. Berilgan fayl nomining kengaytmasini oling.
// Input: "document.pdf"
// Kutilyotgan natija: "pdf"
// let fayl = "document.pdf"
// let natija = fayl.slice(9)
// console.log(natija)

//* 2.17. Berilgan matnni "*" belgisi bilan 10 ta belgigacha to'ldiring (chapdan).
// Input: "abc"
// Kutilyotgan natija: "*******abc"
// let text = "abc";

// console.log(text.padStart( 10,"*"))

//* 2.18. Berilgan matn ichida "JS" so'zi nechanchi indeksda joylashganini toping.
// Input: "Men JS o'rganyapman"
// Kutilyotgan natija: 4
// let text = "Men JS o'rganyapman";
// console.log(text.indexOf( "JS"))

//* 2.19. Berilgan matndagi barcha probellarni vergulga almashtiring.
// Input: "bir ikk uch"
// Kutilyotgan natija: "bir,ikk,uch"
// let text = "bir ikk uch"
// console.log(text.replaceAll(" ", ","))

//* 2.20. Berilgan matnning har bir belgisini alohida array elementiga aylantiring.
// Input: "salom"
// Kutilyotgan natija: ["s","a","l","o","m"]
// let text = "salom"
// console.log ( text.split(""))

//* 2.21. Berilgan matn "https://" bilan boshlanishini tekshiring.
// Input: "https://google.com"
// Kutilyotgan natija: true
// let matn = "https://google.com";

// console.log(matn.startsWith("https://"))

//* 2.22. Berilgan matnni kichik harflarga o'tkazib, probellarni "-" ga almashtiring.
// Input: "Mening Blog Postim"
// Kutilyotgan natija: "mening-blog-postim"
// let matn = "Mening Blog Postim"
// console.log(matn.toLowerCase().replaceAll(" ", "-"))

//! 2.23. Berilgan matnni slice va substring yordamida kesib oling va farqini tushuntiring.
// Input: "JavaScript", index 0 dan 4 gacha
// Kutilyotgan natija: slice: "Java", substring: "Java"

//* 2.24. Berilgan matnni " " bo'yicha ajratib, so'zlar sonini toping.
// Input: "Bu bir gap"
// Kutilyotgan natija: 3
// let text = "Bu bir gap"
// console.log(text.split(" ").length)

//! 2.25. Berilgan matndan faqat raqamlarni ajratib oling.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

//* 2.26. Berilgan matnni o'ng tomondan 5 ta belgigacha "." bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123.."|
// let text = "123"
// console.log(text.padEnd(5,"."))

//* 2.27. Berilgan matnning bosh harfini katta, qolganini kichik qiling.
// Input: "jAVAsCRIPT"
// Kutilyotgan natija: "Javascript"
// let mtn = "jAVAsCRIPT"
// let natija= mtn[0].toUpperCase()+mtn.slice(1).toLowerCase()
// console.log(natija)

//* 2.28. Berilgan matnni teskari tartibda yozib, keyin yana teskari qiling.
// Input: "abc"
// Kutilyotgan natija: "abc"
//^SUNIY INTELLEKT
// let text = "abc";

// let result = text.split("").reverse().join("").split("").reverse().join("");

// console.log(result);

//* 2.29. Berilgan matnni "a" belgisidan ajrating.
// Input: "salom"
// Kutilyotgan natija: ["s","lom"]
// let text = "salom";
// console.log(text.split("a"))

//* 2.30. Berilgan matndagi qaysi belgi eng ko'p qatnashganini toping.
// Input: "aabbcc"
// Kutilyotgan natija: "a" yoki "b" yoki "c"
// let matn = prompt("matn kiriting:")
// let belgiSoni = {}
// let maksimumSOni = 0

//* let engKOPBelgi = ""
// for (let i of matn ){
//     belgiSoni[i] = (belgiSoni[i] || 0 ) +1
//     if (belgiSoni[i] > maksimumSOni) {
//         maksimumSOni= belgiSoni[i]
//         engKOPBelgi =1
//     }
// }
// console.log(`Eng kop belgi ${engKOPBelgi}`)
// ===================================================
// 3. QIYINROQ TOPSHIRIQLAR (40 ta)
// ===================================================

//* 3.1. Berilgan matndagi har bir so'zning birinchi harfini katta qiling.
// Input: "salom dunyo uzbekiston"
// Kutilyotgan natija: "Salom Dunyo Uzbekiston"

// let matn = "salom dunyo uzbekiston"
// let natija = matn
//   .split(" ")
//   .map(w => w[0].toUpperCase() + w.slice(1))
//   .join(" ");
//   console.log(natija)

//* 3.2. Berilgan matnni palindrome ekanligini tekshiring.
// Input: "kiyik"
// Kutilyotgan natija: true
// let matn = "kiyik"
// let natija = matn === matn.split("").reverse().join("")
// console.log(natija)


//* 3.3. Berilgan matndagi barcha unlilarni (a, e, i, o, u) olib tashlang.
// Input: "salom"
// Kutilyotgan natija: "slm"
// let son = "salom";
// let natija = son.split("");
// let unlilar = ["a", "e", "i", "o", "u"];
// let newText = []
// for (let i of natija) {
//     if(!unlilar.includes(i)) {
//         newText.push(i)
//     }
// }
// console.log(newText.join(" "));

// 3.4. Berilgan matnni " " bo'yicha ajratib, so'zlarni teskari tartibda yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "yozaman dastur men"

//* 3.5. Berilgan matn ichidagi barcha raqamlarni topib, ularni yig'indisini hisoblang.
// Input: "a1b2c3d4"
// Kutilyotgan natija: 10
// let matn = "a1b2c3d4";
// let yigindi = 0;
// for ( let i of matn.split("")){
//     if (parseInt(i)){
//         yigindi+= parseInt(i);

//     }
// }
// console.log(yigindi)
//* 3.6. Berilgan matnni camelCase ga o'tkazing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "menDasturYozaman"
// let str = "men dastur yozaman"
// let natija = str
// .split(" ")
// .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
// .join("")
// console.log(natija)

//^ 3.7. Berilgan matndagi takrorlangan so'zlarni toping.
//^suniy intellekt
// Input: "bu bu gap gap takror"
// Kutilyotgan natija: ["bu", "gap"]

// let str2 = "bu bu gap gap takror";
// let words = str2.split(" ");
// let repeat = words.filter((word, i) => words.indexOf(word) !== i && words.indexOf(word) === i - 1);
// console.log(repeat);

//* 3.8. Berilgan matnning ichidagi barcha HTML teglarini olib tashlang.
// Input: "<h1>Salom</h1><p>Dunyo</p>"
// Kutilyotgan natija: "SalomDunyo"
//^suniy intellekt
// let matn = "<h1>Salom</h1><p>Dunyo</p>"
// let natija = matn.replace(/<[^>]*>/g, "")
// console.log(natija)

//! 3.9. Berilgan matndagi har bir belgini Unicode kodiga aylantiring.
// Input: "A"
// Kutilyotgan natija: 65

// 3.10. Berilgan matndagi eng uzun so'zni toping.
// Input: "men dasturlashni o'rganyapman"
// Kutilyotgan natija: "o'rganyapman"

// 3.11. Berilgan matndagi barcha raqamlarni alohida array sifatida qaytaring.
// Input: "Men 25 yoshdaman, 2026 yil"
// Kutilyotgan natija: ["25", "2026"]

// 3.12. Berilgan matnni snake_case ga o'tkazing.
// Input: "myVariableName"
// Kutilyotgan natija: "my_variable_name"

// 3.13. Berilgan matnning har bir so'zining uzunligini toping.
// Input: "men dastur yozaman"
// Kutilyotgan natija: [3, 6, 7]

//* 3.14. Berilgan matndagi probellarni olib tashlang va uzunligini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 10
// let matn = "salom dunyo"
// console.log(matn.replaceAll(" ", "").length)

// 3.15. Berilgan matnni "|" belgisi bilan ajratib, arrayga aylantiring.
// Input: "a|b|c|d"
// Kutilyotgan natija: ["a","b","c","d"]

// 3.16. Berilgan matndagi barcha "e" harflarini indekslarini toping.
// Input: "elephant"
// Kutilyotgan natija: [0, 3]

//* 3.17. Berilgan matnni 5 ta belgidan iborat qilib, o'ngdan "#" bilan to'ldiring.
// Input: "123"
// Kutilyotgan natija: "123##"
// let matn = "123";
// console.log(matn.padEnd(5, "#"))

//* 3.18. Berilgan matnning faqat 2-va 4-indeksidagi belgilarini oling.
// Input: "JavaScript"
// Kutilyotgan natija: "vS"
// let matn= "JavaScript";
// console.log(matn[2] + matn[4])


// 3.19. Berilgan matndagi barcha katta harflarni kichikka, kichiklarini kattaga o'zgartiring.
// Input: "HeLlO"
// Kutilyotgan natija: "hElLo"

// 3.20. Berilgan matndan faqat unli harflarni ajratib oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

// 3.21. Berilgan matnni " " bo'yicha ajratib, so'zlarni uzunligi bo'yicha saralang.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["men", "dastur", "yozaman"] yoki ["men", "yozaman", "dastur"]

// 3.22. Berilgan matnni tekshirib, u faqat kichik harflardan iboratligini aniqlang.
// Input: "salom"
// Kutilyotgan natija: true

//! 3.23. Berilgan matn ichidagi barcha "a" harflarini "e" ga, "e" larni "a" ga almashtiring.
// Input: "salem"
// Kutilyotgan natija: "selam"
// let matn= "salem";

// let natija = matn
//   .replaceAll("a", "e") .replaceAll("e", "a")

//   console.log(natija)

// 3.24. Berilgan matnni 3 ta qatorga bo'ling (har 3 belgidan).
// Input: "abcdefghi"
// Kutilyotgan natija: ["abc","def","ghi"]

//* 3.25. Berilgan matndagi barcha raqamlarni "X" bilan almashtiring.
// Input: "Men 25 yoshdaman"
// Kutilyotgan natija: "Men XX yoshdaman"
// let str = "Men 25 yoshdaman";
// console.log(str.replace(/\d/g, "X"))

// 3.26. Berilgan matnning boshidan va oxiridan ma'lum belgilarni olib tashlang.
// Input: "**salom**", "*"
// Kutilyotgan natija: "salom"

// 3.27. Berilgan matnni har bir belgisini alohida satrga yozing.
// Input: "salom"
// Kutilyotgan natija: "s\na\nl\no\nm"

//* 3.28. Berilgan matn ichida "javascript" so'zi necha marta qatnashganini toping.
// Input: "javascript va javascript"
// Kutilyotgan natija: 2

// let matn = "javascript va javascript";
// let sanoq=matn.split("javascript").length - 1
// console.log(sanoq)

//* 3.29. Berilgan matnni kichik harflarga o'tkazing va undagi barcha probellarni olib tashlang.
// Input: "Salom Dunyo"
// Kutilyotgan natija: "salomdunyo"
// let matn="Salom Dunyo"

// let natija=matn.toLowerCase().replace(/ /g, "")
// console.log(natija)

// 3.30. Berilgan matndagi barcha belgilarni o'chirib, faqat raqamlarni qoldiring.
// Input: "a1b2c3"
// Kutilyotgan natija: "123"

// 3.31. Berilgan matnni " " bo'yicha ajratib, so'zlarni alfavit bo'yicha saralang.
// Input: "banana olma uzum"
// Kutilyotgan natija: ["banana","olma","uzum"]

// 3.32. Berilgan matnning har bir so'zidan birinchi va oxirgi harfni oling.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["mn", "dr", "yn"]

//* 3.33. Berilgan matndagi barcha probellarni sonini toping.
// Input: "salom dunyo"
// Kutilyotgan natija: 1
// let matn="salom dunyo"
// let sanoq =0
// for (let i = 0; i < matn.length; i++){
//   if(matn[i] === " "){
//     sanoq++
//   }
// }
// console.log(sanoq)

// 3.34. Berilgan matnni " " bo'yicha ajratib, har bir so'zni katta harf bilan yozing.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOM DUNYO"

// 3.35. Berilgan matn ichidagi barcha harflarni alifbo tartibida joylashtiring.
// Input: "cba"
// Kutilyotgan natija: "abc"

// 3.36. Berilgan matnning faqat toq indekslaridagi belgilarini oling.
// Input: "salom"
// Kutilyotgan natija: "ao"

//* 3.37. Berilgan matndagi barcha " " belgilarini "|" ga almashtiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "salom|dunyo"
// let matn = "salom dunyo"
// let natija =matn.replaceAll(" ","|")
// console.log(natija)

//* 3.38. Berilgan matnni 4 ta belgidan iborat qilib, chapdan "0" bilan to'ldiring.
// Input: "12"
// Kutilyotgan natija: "0012"
// let matn = "12";

// let natija = matn.padStart(4, "0")
// console.log(natija)

//* 3.39. Berilgan matnning uzunligini hisoblang (probelsiz).
// Input: "salom dunyo"
// Kutilyotgan natija: 9
// let matn = "salom dunyo"
// let uzunlik =matn.replace(/ /g, "").length
// console.log(uzunlik)

//* 3.40. Berilgan matn ichidagi barcha "l" harflarini indekslarini toping.
// Input: "hello"
// Kutilyotgan natija: [2, 3]
// let matn ="hello"
// let indeksla =[]
// for (let i = 0; i < matn.length; i++){
//   if (matn[i] === "l"){
//     indeksla.push(i)
//   }
// }
// console.log(indeksla)

// ===================================================
// 4. QIYIN TOPSHIRIQLAR (20 ta)
// ===================================================

//* 4.1. Berilgan matn ichidagi barcha qavslar ichidagi matnlarni ajratib oling.
// Input: "Bugun (dushanba) kuni (dars) bor"
// Kutilyotgan natija: ["dushanba", "dars"]

// let matn = "Bugun (dushanba) kuni (dars) bor"
// let arr = matn.split(" ")
// let newArr = []
// for (let i of arr) {
//     if (i[0] === "(") {
//         newArr.push(i.slice(1, -1))
//     }
// }
// console.log(newArr)
// console.log(arr)
// 4.2. Berilgan matnni tekshirib, u valid email manzili ekanligini aniqlang (regex bilan).
// Input: "ali@gmail.com"
// Kutilyotgan natija: true

// 4.3. Berilgan matn ichidagi barcha so'zlarni o'zgartirib, ularni teskari tartibda yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "nem rutsad namazoy"

// 4.4. Berilgan matnni " " bo'yicha ajratib, har bir so'zni kichik harf bilan yozing, lekin birinchi harfini katta qiling.
// Input: "SALOM DUNYO"
// Kutilyotgan natija: "Salom Dunyo"

// 4.5. Berilgan matn ichidagi barcha raqamlarni topib, ularni 2 ga ko'paytiring.
// Input: "a1b2c3"
// Kutilyotgan natija: "a2b4c6"

// 4.6. Berilgan matnni shifrlang: har bir belgini Unicode kodiga 1 qo'shib qaytaring.
// Input: "abc"
// Kutilyotgan natija: "bcd"

// 4.7. Berilgan matn ichidagi barcha " " belgilarini olib tashlang va natijani katta harf bilan yozing.
// Input: "salom dunyo"
// Kutilyotgan natija: "SALOMDUNYO"

// 4.8. Berilgan matn ichidagi barcha so'zlarni uzunligi bo'yicha o'sish tartibida saralang.
// Input: "men dastur yozaman"
// Kutilyotgan natija: ["men", "dastur", "yozaman"]

// 4.9. Berilgan matnni tekshirib, u faqat raqam va harflardan iboratligini aniqlang.
// Input: "abc123"
// Kutilyotgan natija: true

// 4.10. Berilgan matn ichidagi barcha "a" va "A" harflarini indekslarini toping.
// Input: "Alabama"
// Kutilyotgan natija: [0, 2, 4, 6]

// 4.11. Berilgan matnni " " bo'yicha ajratib, so'zlarni teskari tartibda yozing va katta harf bilan yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "YOZAMAN DASTUR MEN"

// 4.12. Berilgan matn ichidagi barcha raqamlarni olib tashlang va natijani kichik harf bilan yozing.
// Input: "Men 25 yoshdaman"
// Kutilyotgan natija: "men yoshdaman"

// 4.13. Berilgan matnni tekshirib, u valid parol ekanligini aniqlang (kamida 8 belgi, katta, kichik, raqam).
// Input: "Secret123"
// Kutilyotgan natija: true

// 4.14. Berilgan matn ichidagi barcha so'zlarni alohida satrga yozing va har bir so'zning uzunligini yozing.
// Input: "men dastur yozaman"
// Kutilyotgan natija: "men:3\ndastur:6\nyozaman:7"

// 4.15. Berilgan matnni " " bo'yicha ajratib, so'zlarni alfavit bo'yicha teskari tartibda saralang.
// Input: "banana olma uzum"
// Kutilyotgan natija: ["uzum","olma","banana"]

// 4.16. Berilgan matn ichidagi barcha " " belgilarini " - " ga almashtiring.
// Input: "salom dunyo"
// Kutilyotgan natija: "salom - dunyo"

// 4.17. Berilgan matnni tekshirib, u faqat katta harflardan iboratligini aniqlang.
// Input: "SALOM"
// Kutilyotgan natija: true

// 4.18. Berilgan matn ichidagi barcha belgilarni o'chirib, faqat unli harflarni qoldiring.
// Input: "salom"
// Kutilyotgan natija: "ao"

// 4.19. Berilgan matn ichidagi barcha raqamlarni topib, ularni yig'indisini hisoblang va natijani matn sifatida qaytaring.
// Input: "a1b2c3d4"
// Kutilyotgan natija: "Yig'indi: 10"

// 4.20. Berilgan matnni tekshirib, u valid phone number ekanligini aniqlang (regex bilan).
// Input: "+998901234567"
// Kutilyotgan natija: true










