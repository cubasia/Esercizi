function sumUntil(maxValue) {
 
  let somma = 0
  for (i = 1; i <= maxValue; i++){
    somma+=i
  }
    return somma
}

console.log(sumUntil(5));