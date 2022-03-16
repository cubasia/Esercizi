// Implementare, tramite il blocco switch-case,
//     la funzione calculateSalary, la quale, dato in input un ruolo, calcola il salario corrispondente
//altrimenti il salario vale quello di default

// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500

// default => 1000

//-------------------------------------------------------------------------------------------------

// Quando è chiamata la funzione calculatesalary con un parametro,
//     allora, devo confrontare il valore del parametro con tutti i valori che conosco,
//  role == "ceo"
// role == "manager"
// role == "cto"
// role=="developer"


//         SE il valore del parametro è uguale a uno che conosco ritorna il valore del ruolo corrispondente /true
//         else ritorna il valore del ruolo default

function calculateSalary(role) {
  // ...
  switch (role) {
    case "developer":
      return 1500;
    
      case "ceo":
          return 2200;
  
      case "manager":
          return 1800;
      
      case "cto":
          return 1800;
      
      default:
         return 1000      
  }
    
    
}



const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");


console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);

// console.log("oggi è : " + giorno(0))
// console.log("oggi è : " + giorno(1));

// function giorno(quando) {
//     if (quando == 0) {
//         return "oggi"
//     }
//     if (quando == 1) {
//         return "domani"
//     }

// }
