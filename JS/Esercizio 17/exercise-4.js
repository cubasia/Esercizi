function calculate() {
  let somma = 0

  
  printResult=function  () {
    console.log( somma);
    }

  add = function (numero) {
    somma += numero;
    return this;
  };
  
  multiply=function (numero) {
  somma *= numero
    return this
  }
  sub=function (numero) {
    somma -= numero;
        return this;
   }
  divide =function (numero) {
    if (numero == 0) return this
    somma /= numero;
     return this 
   }
  // function 
  return this
}

const calculator = calculate();

calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7