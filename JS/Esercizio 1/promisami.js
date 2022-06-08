const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        resolve(JSON.stringify(person));
      }

       reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

// fetchPersonById(2)
//   .then((persona) => console.log(JSON.parse(persona)))
//     .catch((messaggio) => console.log(messaggio));
  
    
// fetchPersonById(12)
//   .then((persona) => console.log(JSON.parse(persona)))
//     .catch((messaggio) => console.log(messaggio));
  

Promise.race([
  fetchPersonById(1).catch((error) => {
    return error;
  }),
  fetchPersonById(12).catch((error) => {
    return error;
  }),
])
  .then((values) => {
    console.log(values);
  })



