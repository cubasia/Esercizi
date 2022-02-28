function getKeys(obj) {
  let proprieta = []
  for (p  in obj) {
    proprieta.push(p)
  }
  return proprieta
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

