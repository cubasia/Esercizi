function memoize(fn) {
  let cache = {};
  cache.results = []; //crea una properità array nell'oggetto
  let esegui=fn  //crea una proprietà che salva la funzione ricorsiva
  const NOT_FOUND = -1;
  //' Questa è la nuova funzione ricorsiva che salva i risultati intermedi
  function calcola(x) {
    //cerca il risultato
    const indice = cache.results.length ==0 ? NOT_FOUND: cache.results.findIndex(
      (item) => item.indice == x );
    
    if (indice == NOT_FOUND) {
      //nuovo risultato da salvare
           
      let risultato=esegui(x)
      cache.results.push({ 'indice': x, 'risultato':risultato  });
      return risultato
    } else return cache.results[indice].risultato; //restituisce risultato precedente
  }
  return calcola
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
 console.log(factorial(6));
 console.log(factorial(5));