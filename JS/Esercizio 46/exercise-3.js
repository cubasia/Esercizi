function isAdult({age}) {
  return age >= 18;
  
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));

const object = { a: 5, b: 6, c: 7  };
const persona = ( ({ id, firstName }) => ({ id, firstName }) )(person);

let unwrap2 = function ({ id, firstName }) {
  return { id,firstName };
};

const mario = unwrap2(person)







console.log(persona);
console.log(mario);
 









