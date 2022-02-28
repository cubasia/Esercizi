const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject)=>{
    const persona = persons.find(item => item.id == id)
    if (!persona) reject(`Nessuna persona trovata per id=${id}`)
    else resolve(persona)
    
  })
}

fetchPersonById(1).then(persona =>console.log(persona)).catch((messaggio)=>{console.log(messaggio)})
fetchPersonById(12).then(persona =>console.log(persona)).catch((messaggio)=>{console.log(messaggio)})