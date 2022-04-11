const sum = function (a, b) {
  return a + b;
}

const log = function (value) {
  console.log(value);
}

let hello = function () {
  return "Hello World!";
}; 

const sum2 = (a, b) => { return a + b } //tip se il blocco è di una sola istruzione non serve return
const log2 = (value) => {
  console.log(value); //tip, quando c'è solo un parametro non servono le tonde
  
}
let hello2 = ()=>{"Hello World"}
