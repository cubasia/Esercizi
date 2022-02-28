
function adultFilter(persons) {
  // PREMESSO CHE il miglior modo sarebbe usare filter
  // return per=sons.flter (item => item.age >17)
  let risultato = [];
  for (i = 0; i < persons.length; i++){
    if (persons[i].age > 17)
       risultato.push(persons[i])
  }
  
  return risultato;
}
function adultFilter2(persons) {
  // PREMESSO CHE il miglior modo sarebbe usare filter
  // return per=sons.flter (item => item.age >17)

  let k=0

  while (k < persons.length) {
    if (persons[k].age < 18) persons.splice(k, 1);
    else k++
    
  }


  return persons;
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

const persons2 = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 }]

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);

const adults2 = adultFilter2(persons2);
console.log(adults2);

