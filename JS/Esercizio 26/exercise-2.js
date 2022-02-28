function Person(firstName, lastName) {
  this.firstname = firstName;
  this.lastName = lastName;
  
  this.fullName = () =>{
    return this.firstname + ' ' + this.lastName}
      
}

john = new Person('John','Doe')
simon=new Person('Simon','Collins')

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins