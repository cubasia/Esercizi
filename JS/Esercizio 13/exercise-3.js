const sum = (a,b) => {return a+b}
const subtract = (a, b) => { return a - b }
const divide = (a, b) => { return a / b }
const multiply = (a, b) => { return a * b }


console.log(((2 + 4) * (5 + 2) - 2) / 5);
console.log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5))

