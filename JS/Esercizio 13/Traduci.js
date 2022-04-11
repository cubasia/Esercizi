
class Famiglia{
   capofamiglia = "Maurizio"
    coniuge = "la mia"
    figli= [] 
    residenza= {
        via :"Ostia",
        citta: "Roma"
    } 
    constructor() {
         this.capofamiglia=""
         this.coniuge=""
         this.residenza.via=""
         this.residenza.citta = ""
        
     }   
    // stampaListamembri()
    // cambioresidenza()
    // cambiocitta()
    // aggiungiFiglio()
    // CamboCapoFamiglia()
    DimmiCitta = function () { return this.residenza.citta }
    get citta() { return this.residenza.citta }
    set citta(nuovacitta) { this.residenza.citta = nuovacitta }
    dimmitutto = function () {return this.capofamiglia+this.coniuge}
    // Dimmiquantifiglimaggiorenni()
    // Dimminomemoglie()
}

let FamigliaGino = new Famiglia() 
let FamigliaSorella = new Famiglia()
FamigliaGino.residenza.citta="Milano"
FamigliaGino.capofamiglia="Gino"

//FamigliaGino.cambiocitta("Milano") Esercizio

// console.log(FamigliaGino.DimmiCitta()); //metodo senza conoscere la struttura
// console.log(FamigliaSorella.DimmiCitta());
console.log(FamigliaGino.citta); //non conosco la struttura
FamigliaGino.citta = "Roma"
FamigliaGino.residenza.citta = "Milano";
console.log(FamigliaGino.capofamiglia );
console.log(FamigliaGino.citta); //non conosco la struttura

//step 1 copia la struttura
// {
// capofamiglia = "Maurizio";
// coniuge = "la mia";
// figli = [];
// residenza = {
//   via: "Ostia",
//   citta: "Roma",
// }; 
// //step 2 - sulla struttura copiata esegui costructor
//     this.capofamiglia = ""
//     this.coniuge = ""
//     this.residenza.via = ""
//     this.residenza.citta = ""
//    {
// capofamiglia = "";
// coniuge = "";
// figli = [];
// residenza = {
//   via: "",
//   citta: "",
// };  

