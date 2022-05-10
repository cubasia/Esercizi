function somma(a, b) {
    return a+b
}
console.log(somma(3, 5)) //8

function verificanumero(numero) {
  return  numero.valore >100
}
let cosa = { valore: 100,pippo:"aaa" }
let cosa2 = {valore:200,pluto:"aaa"}
let numero = {valore:300,gino:"ssss"}

let misc = [cosa, cosa2, numero]
let misc2 = [cosa2, cosa, numero]

console.log(misc.filter(verificanumero)) //[cosa2,numero]
console.log(misc2.filter(verificanumero)) //[cosa2,numero]