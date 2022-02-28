class Person {
  #firstname
  #lastname
  #age
  constructor(firstName, lastName, age) {
    this.#firstname = firstName
    this.#age = age
    this.#lastname=lastName
  }

  get firstName() {
    return this.#firstname
  }
  set firstName(firstName) {
    this.#firstname=firstName
  }
  get lastName() {
    return this.#lastname
  }
  set lastName(lastName) {
    this.#lastname=lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName)