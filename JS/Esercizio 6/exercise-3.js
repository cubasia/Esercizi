// Implementare, tramite blocchi condizionali e cicli, la funzione adultFilter,
//   la quale, dato un array di persone,
//     filtra e restituisce soltanto coloro che sono maggiorenni

//scrivere la funzione adultfilter usando IF e FOR
//ha come parametro un array di oggetti che hanno una proprietà nome e una proprietà age
//Noi vogliamo che si testi per ogni elemento dell'array di un input la proprietà age che deve essere maggiore di 17
// se la proprietà ha un valore maggiore di 17 allora uso un array per salvarmi l'elemento
//altrimenti non faccio niente


function adultFilter(personsP) {
  let maggiorenni = [] //output
  for (let i = 0; i < personsP.length;i++) {
    if (personsP[i].age < 18) {
         maggiorenni.push(personsP[i]); 
      }
  }

  return maggiorenni
  
  }
  
  


const persons = [
  { name: "Paul", age: 16 }, //index 0
  { name: "George", age: 17 }, //index 1
  { name: "Lucas", age: 21 }, //index 2
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];


const adults = adultFilter(persons);
console.log(persons);
console.log(adults);



