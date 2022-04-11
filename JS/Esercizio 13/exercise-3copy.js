// const sum = function (a, b) {
//   return a + b;
// }
const sum2 = (a, b) => { return a + b }

// const subtract = function (a, b) {
//   return a - b;
// }
const subtract2 = (a,b) => {return a-b}
// const multiply = function (a, b) {
//   return a * b;
// }
const multiply2=(a,b)=>{return a *b}
// const divide = function (a, b) {
//   return a / b;
// }
const divide2 = (a,b)=>{return a/b}
// const log = function (value) {
//   console.log(value);
// }
const log2= (value)=>{console.log(value);
}
// console.log(((2 + 4) * (5 + 2) - 2) / 5);
// console.log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5))
console.log(((2 + 4) * (5 + 2) - 2) / 5);
console.log(divide2(subtract2(multiply2(sum2(2, 4), sum2(5, 2)), 2), 5))

