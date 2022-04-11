function calculateAverageAge(persons) {
  let sommadelleeta = 0;
  // persons[0].age //1
  // sommadelleeta = persons[0].age //3b
  // console.log(listadelleeta); //16

  // persons[1].age //17
  // sommadelleeta = sommadelleeta + persons[1].age //3b
  // console.log(listadelleeta); //33

  // persons[2].age //21
  // sommadelleeta = sommadelleeta + persons[2].age //3b
  // console.log(listadelleeta); //54

  //qui devo ciclare
  for (let i = 0; i < persons.length; i++) {
    sommadelleeta += persons[i].age;
  }
   console.log(sommadelleeta); //OK somma
   console.log(persons.length); //Ok conta
  let a = sommadelleeta
  let b = persons.length
  return (a/b)
}
   


const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];
  
//ne quante persone ne l'età delle persone

// 1. parto dal primo bambino
// 2. anni hai 
// 3. risponde 10
// 3b. scrivo età da qualche parte (in un registro)
// 4. vado dal secondo
// 5. hanni hai
// 6. risponde 20
// 6b. sommo 20 (il secondo) al numero 10 (al primo)
// 7. e continuo all'ultimo bambino

// 7b.comincio dal primo 
// 7c.scrivo una x da qualche parte
// 7d vado al secondo 
// 7e scrivo una x e cosi fino alla finished

// 10. conto quante x secondo
// 11. scrivo la conta da una parte

// 12. la somma / la conta
// 13 lo csrivo da una parte
// 14 torno da GF questo è la media








//const averageAge = calculateAverageAge(persons);
 console.log(calculateAverageAge(persons));; //11


//console.log(persons);
 //console.log(averageAge);

// Implementare, tramite blocchi condizionali e cicli,
// la funzione`calculateAverageAge`, la quale, dato un array di persone,
// calcola l'età media