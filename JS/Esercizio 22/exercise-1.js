const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  info: () => {
    return `${person.fullName()}, ${person.age} - ${person.job}`
  },
  fullName: () => {
    return `${person.firstName} ${person.lastName}`
  }
}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer


// function somma (int a,int b){
  //return a+b
//}


