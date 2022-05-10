// # Array Methods - Exercise 31
// Implementare la funzione `ageAverage` che, dato un array di persone, calcola l'età media.

//__________________________________________________________________________

//1) Leggere il valore della proprietà "age" di ogni singolo oggetto contenuto nell'array di partenza
  //e lo sommo. Alla fine devo dividere la somma totale diviso il numero di oggetti presenti nell'aray di partenza.
//2) Array.somma ()/persons.lenght

function calculateAverageAge(persone) {
 
  const somma = persone.reduce( function (prev, cur)   {    return prev + cur.age;  }, 0)
  return somma / persone.length
}
 const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);