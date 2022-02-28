const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [item,value] of Object.entries(person)) {
  //console.log(`${item[0]}: ${item[1]}`);
  
  console.log(`${item}: ${value}`);
}
