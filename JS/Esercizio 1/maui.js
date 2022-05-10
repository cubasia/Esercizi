//JS funziona in maniera sequenziale, ovvero una cosa dietro l'altro: sincrona

// let primo = ["a", "b", "c", "d", "e", "f"]
// let secondo = [4,5,9,80]
// let ordinato = secondo.sort((a, b) => a - b)
// console.log(ordinato);
// let risultato = secondo.reduce((a,b) => a + b)
// console.log(risultato);

let Persone = [
  {
    nome: "uno",
    importo: 1000,
        cognome: "rossi"
  },
  {
    nome: "due",
    importo: 1000,
    cognome: "bianchi",
  },
  {
    nome: "tre",
    importo: 1000,
    cognome: "verdi",
  },
  {
    nome: "quattro",
    importo: 1000,
    cognome: "bianchi",
  },
];

let nuovo = [...Persone]
let uno = { a: 1, b: 2 }
//let due = Object.assign({}, uno)
let due = { ...uno, c: 3 }
let tre = Object.assign({},due)
tre = {...due}
//console.log(due);

// let secondo = [4, 5, 9, 80]
//  secondo = [... secondo,100]
// console.log(secondo);

//int(100*Math.random())
let Persone2 = []
// for (let i = 0; i <Persone.length;i++) {
//     Persone2.push(Persone[i])
// }
 let secondo = [4,5,9,80]
// Persone2 = Persone.map(item => {
//         return { ...item,eta:20 }
// })
Persone2 = secondo.map(item => item * 2)

console.log(Persone2)

// let Persone2 = Persone.map(elemento => {
// //   return {
// //     nome: elemento.nome,
// //     importo: elemento.importo,
// //     cognome: elemento.cognome,
// //     età: 20
//     //console.log(elemento)
//     return {
//         ...Persone, età: elemento.età=20
//     }
//      })


     

// let sortato = Persone.sort((a, b) => {
    
//     return (a.cognome+a.nome < b.cognome+b.nome) ? -1 : 1
    
//     })
    //console.log(sortato)
    



    //se il cognome è minore prendo il primo
    //se il cognome è maggiore prendo il secondo
    //se il cognome è uguale verfico il nome
        //se il cognome è minore prendo il primo
        //se il cognome è maggiore prendo il secondo
        //se il cognome è uguale verfico il nome
            //
    
    //Rossi Mario
    //Rossi Maria
    



    // let result = []
// let resulto = primo.map((valore, indice)=> {
//   return  indice
// }).filter(elemento => elemento>3).includes(8)

// console.log(resulto);

// for (let i = 0; i < primo.length; i++){
//     result.push(i)
// }


// let jason = [{a:1},{b:2},{c:"aa"},{d:4},{e:5}]


// if (secondo.some(elemento => elemento <3))
//     console.log("si, è vero");

//     let terzo = secondo.filter(elemento => elemento >5) //[6]
// console.log(terzo);

// let cosa = jason.find(elemento => elemento.c=="aa")
// cosa = jason.findIndex(elemento => elemento.c == "aa")
 
// let trovami = 3

// if (trovami == 1 || trovami == 2 || trovami == 3) console.log(trovami)
// if ([1, 2, 3].includes(trovami)) console.log(trovami);

// for (elemento in primo) {
//     if (elementi =="e") console.log("trovato")
// }
// if (primo.includes("e")) console.log("trovato");
// primo.every //verifica se una condizione vale per tutti gli elementi
// primo.some //cverifica se la condizione vale almeno per uin eleneto
// primo.filter //restituisce un array di elementi che soddisfano la condizione
// primo.find //trova ubn elemento
// primo.findIndex //trova la posizione dell'elemento
// primo.indexOf //la prima posizione di un elemento
// primo.includes //restirtuisce true se l'elemento esiste nell'arraty
// primo.map //restituisce un array di elementi diverso dall'origine, ma con la stessa lunghezza
// primo.reduce //restituisce un unico valore dato dalal formula che metti

// primo = []
// primo.length=0

// primo = [...primo,...secondo]
// console.log(primo);

// let msg = "aswdfghj"
// let temp = personOne;
// personOne = personTwo;
// personTwo = temp;
// [personOne, personTwo] = [personTwo, personOne];

//true, false

//undefined,null."",0,false = false

// if (msg) {
//     console.log(msg)
// }
// if (msg==undefined || msg==null) {
//     console.log(msg)
// }
// if (msg==undefined || msg==null) {
//     msg="not found"
// }

// msg && console.log(msg)
// msg ?? console.log(msg)

// msg ??= "not found"

// console.log(msg.charAt(2));
// console.log(msg[2]);


// for (let i = 0; i < primo.length; i++){
//     console.log(primo[i])
// }

// for (elemento in primo) {
//     console.log(elemento);
// }


