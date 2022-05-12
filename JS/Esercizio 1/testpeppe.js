

let valore = 100;

// console.log(valore);
// myPromise2();
// console.log(valore);

//Js esegue tutto in modo sincrono, ovvero non aspetta mai
//evento click onclick(diventanero()) dblclick(mostraallarme)

//chiamaurl(http://descriziones.com,gesticirisultato)

async function StampaPippo() {
  return "pippo"
}
function myFunction() {
  return Promise.resolve("pippo");
}
async function myPromise2() {
  //
  valore = await myPromise; // aspetta il risultato della promise
  //myPromise.then((pippo) => {
  //valore = pippo
  //console.log("ioì", valore);
//});
  console.log("ioì", valore);
  //altro codice complesso a piacere
}


// console.log("prima") //sync
// //myPromise.then(pippo => console.log(pippo)) //async
// // StampaPippo().then(pippo => console.log(pippo)) //async
// // setTimeout(function () { //async
// //     console.log("sono timeout")
// //   }, 1000);
// myPromise2() //async
// console.log("dopo"); //sync

let myPromise = new Promise(function (myResolve, myReject) {
  // setTimeout(function () {
  //       myResolve(50);
  // }, 3000);
  myResolve(50);
});

async function ritornapippo() {
  pippo = await myPromise //5
  pluto = await myPromise //3
  // Promise.all(myPromise,myPromise) //5
  // Promise.race(myPromise,myPromise) //5
  mostraavideo(pippo,pluto)
}
let pippo = 0
 
ritornapippo()
console.log(pippo * 3) //sync

