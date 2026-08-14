const div = document.createElement('div')
document.body.append(div)

div.innerHTML = `
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta, accusantium asperiores saepe aliquid quas, iusto culpa dolor non beatae ut cupiditate facilis eaque mollitia delectus nemo. Ipsam ut reiciendis rem beatae, qui optio ab exercitationem dicta iure nobis ullam ratione dolorum nostrum dolore recusandae? Facere voluptatibus in non quo?</div>
   

`
div.id = "divv"
const tashqidiv = document.getElementById('divv')
tashqidiv.style.width = "2000px"
tashqidiv.style.height = "500px"
tashqidiv.style.boxShadow = "0px 1px 10px 1px"
tashqidiv.style.borderRadius = "20px"
tashqidiv.style.margin = "100px auto"
tashqidiv.style.display = "flex"
tashqidiv.style.justifyContent = "space-around"
tashqidiv.style.alignItems = "center"
tashqidiv.style.backgroundColor = "white"

const ichkiDivlar = document.querySelectorAll("#divv div")

ichkiDivlar.forEach((ichki) => {
    ichki.style.boxShadow = "0px 1px 10px 1px ";
    ichki.style.width = "250px"
    ichki.style.height = "300px"
    ichki.style.overflow = "scroll"
    ichki.style.textAlign = "center"
    ichki.style.padding = "10px"
    ichki.style.borderRadius = "20px"

});