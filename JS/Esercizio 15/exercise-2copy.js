function pow(base) {
  let Mario = function (esponente) {
    return base ** esponente
   } //closure

  return Mario
}
//step 1 fare una funzione che restituisce una funzione
//step2 la funzione restituita ha un parametro (esponete) e restituisce l'operazione base elavata all'esponente

const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));