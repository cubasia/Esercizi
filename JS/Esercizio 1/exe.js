const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function trasforma({ id, age }) {
  return { id, age }
}

const json = JSON.stringify(trasforma(person));
console.log(json); 

//(({ id, age }) => ({ id, age }))(person);

