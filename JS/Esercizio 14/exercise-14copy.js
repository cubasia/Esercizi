function greet(greeting) {

  return function Mario (nome) {
       return greeting+", "+nome
    }
}

const greetWithHello = greet('Hello');
const greetWithBye = greet('Bye');
const greetWithHi = greet('Hi');

const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');

console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);