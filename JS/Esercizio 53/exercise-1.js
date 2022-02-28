function sum( ...numeri) {
   //dassumendo che siano solo numeri e che ci sia almeno un parametro
     return numeri.reduce((previous, current) => {
         return previous + current;
       });
}


console.log(sum(1, 2, 3, 4, 5));

