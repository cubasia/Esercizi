//uno , due, tre

console.log(converti(1)); //uno
console.log(converti("uno")); //due
console.log(converti(3)); //tre
console.log(converti(30)); //altro

function converti(numero) {
  switch (numero) {
    case 1:
      return "uno";
    case "uno":
      return 1;

    case 3:
      return "tre";

    default:
      return "altro";
  }
}
