const obyekt = {
    ism: "Shoxruzbek",
    kasbi: "bekorchi",
    arr: [1,2,3,4,5,6],
    suhrob: function () {
          for(let i of this.arr){
              if (i % 2 ==0 ) {
                console.log(i)
            }
        }
    },
    arrowFunksiya: () => {
        console.log(this.ism);
    }
}

obyekt.suhrob(),
obyekt.arrowFunksiya();