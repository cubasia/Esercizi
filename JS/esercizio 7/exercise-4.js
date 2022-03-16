// implementare, tramite blocchi condizionali e cicli,
//   la funzione nicknameMap, la quale, dato un array di persone,
//     crea un array di nickname.Il nickname deve essere formato nel seguente modo: <name>-<age>

//scrivere la funzione funzione attraverso l'uso si IF e FOR 
//ha in input un array di oggetti che rapprentano le persone
//restituisci un output un altro array di elementi chiamati nickname fatti cosi
//proprietà name unita al carattere - unita alla proprietà age
// per ogni elemento dell'array di input

function nicknameMap(personsnick) {
  let nick = [] //output

  for (let i = 0; i < personsnick.length; i++){
    nick.push(personsnick[i].name+"-"+personsnick[i].age)
  }

  return nick
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

//Paul-16

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);