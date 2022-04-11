let ogg = {
    primo: 1,
    secondo: 2
    
}

//copiare due oggetti in modo distinto per valore
//let b = Object.assign({},ogg) //un diverso indirizzo di memoria
let b = { ...ogg } //un diverso indirizzo di memoria
let c = {
    
    secondo:0
}
c= {...ogg} 
//let b = ogg //assegna lo stesso indirizzo di memoria a entrambe le variabili

b.primo = 4
console.log(ogg.primo);
console.log(b.primo);
console.log(c.primo);






//implicita
// let b = {
//   primo: 1,
//   secondo: 1
// };


