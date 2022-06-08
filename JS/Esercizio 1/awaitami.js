//The word “async” before a function means one simple thing: a async function always returns a promise.

//Forma con promise esplicita
function forma2() {
  return new Promise(function (resolve, reject) {
    resolve(1);
  });
}
//Forma con promise implicita
async function forma1() {
  return 1;
}
//Verifica
forma1().then(console.log)
forma2().then(console.log)
//------------------------------- seconda parte ----------------------------------------------------------------
async function formasyncawait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // aspetta la promise , modo implicito
  console.log(result); // "done!"

  //modo equivalente , esplicito
    promise.then(parametro => { result = parametro; });

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
}

formasyncawait();

//test finale1,
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter() //Spiega cosa fa
  .wait()
  .then(console.log);

//end test finale1

//test finale 2
//trasformare la function in una async await
// async function loadJson(url) {
//     let Gino = await fetch(url)
       // return Gino.json()

//     return result
// }

// async function loadJson(url) {
//   const response = await fetch(url);
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
// }


// loadJson('https://javascript.info/no-such-user.json')
//   .catch(console.log); // Error: 404
// //end test finale2

//test3
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...scrivere un codice per richiamare la funzione wait
    // we need to call async wait() and wait to get 10 e stampare in console il suo risultato
  
}

//end test3
f() //darà come risultato 10