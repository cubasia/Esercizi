// let macchina = function COMEMEPAREancheomessa(cicco) {
//   return cicco;
// };
// function restuiscomacchina(saluto) {
//   console.log(saluto)
//   let macchina = function COMEMEPAREancheomessa(cicco) {
//     return cicco+saluto;
//   };
//     return macchina;
// }

const { isMapIterator } = require("util/types");

// let quASSICOSA = restuiscomacchina("CIAO");
// console.log(quASSICOSA("CIAO"));

//console.log(macchina());

function Formula(cosa) {
    
    let quadrato=  function q(l) {
          return "area del "+ cosa + "= " + l * l;
        };
     
    return quadrato
           
}

let Gino = Formula("quadrato") 
console.log( Gino(5))