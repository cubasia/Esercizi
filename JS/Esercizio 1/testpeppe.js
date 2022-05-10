async function myPromise2() {
  //
  valore = await myPromise;
  
  console.log('ioì',valore);
}

let valore = 100;
let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
        myResolve(50);
  }, 3000);
});
console.log(valore);
myPromise2();
console.log(valore);