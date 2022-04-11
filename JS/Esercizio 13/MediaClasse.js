class Mario {
  _base = 0
  get base() {
    return this._base
  }
  set base(value) {
    this._base = value
  }
  altezza = 0
  _colore = { color: "red" }
  area = 0
  
  // CalcoloArea = function () {
  //   base * altezza
  // }

  get Calcoloarea () {base * altezza}

}

let Pippo = new Mario() 
//Pippo.CalcoloArea() //richiamo il metodo 
Pippo.Calcoloarea  //Richiamo una Proprieta
Pippo.altezza 
Pippo.area=1.5





let pippo = {
  base : 0,
  altezza : 0,
  _colore: { color: "red" },
  area: 0,
  tipo: "triangolo"
}

console.log(Pippo);
console.log(pippo);

pippo.base = 0
pippo.altezza = 3;
pippo.area=1.5



// class FiguraPiana {
//   bas434eee323e = 0;
//   alt434e42zza = 0;
//   _colore = {color:"red"};

//   get colore() {
//     return this._colore;
//   }
//   set colore(value) {
//     this._colore = value;
//   }
//   constructor(base, altezza) {
//     this.bas434eee323e = base;
//     this.alt434e42zza = altezza;
//   }
    
//   get heigth  () { return this.alt434e42zza; }
//   set heigth(altezza)
//   {
//     this.alt434e42zza=altezza;
//   }
  
  
// }

// //copia le proprietà cosi come definite nella classe e poi esegue automaticamente costructor
// let Triangolo = new FiguraPiana(8,12)
// let Quadrato = new FiguraPiana(4, 4)
// let Triangolo2 = new FiguraPiana(6,15)

// Triangolo.heigth
// Triangolo.heigth = 9

// console.log(Triangolo.colore);

// // console.log(Quadrato.base);
// // console.log(Quadrato.altezza);
// // console.log(Triangolo2.base);
// // console.log(Triangolo2.altezza);



// //  Triangolo.base=3
// //  Triangolo.altezza = 4
// //  area= Triangolo.base * Triangolo.altezza /2

// // let Triangolo_secondo = new FiguraPiana();
// // Triangolo_secondo.base = 3;
// // Triangolo_secondo.altezza = 4;
// // area_secondo = (Triangolo_secondo.base * Triangolo_secondo.altezza) / 2;



// //StampaSoloFigurePiane(Triangolo)

// function StampaSoloFigurePiane(Figura) {
//     if (Figura instanceof FiguraPiana)
//     {
              
//         }
//     else     console.log("non è una figura piana")
// }


