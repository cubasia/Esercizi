const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify( ( ({ id, age }) => ({ id, age }) )(person));

console.log(json); // Should return: { id: 1, age: 25 }


