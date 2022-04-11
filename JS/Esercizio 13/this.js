let Verificacartadiidentita = (a) => {
//if (Object.keys(a).includes("nome") && Object.keys(a).includes("cognome") && Object.keys(a).includes("id"))
//return true else false
   
   let numerotrovati = 0
   let valoridacercare = ["nome", "cognome", "id"] 
  
   for (const property in a) {
    //      console.log(property);
  if (property == "nome" || property == "cognome" || property == "id") {
 
    {
      //ok test con successo
       numerotrovati++;
    }
   }
   
   if (numerotrovati == 3) return true
       else return false
      
}



//verifica  delle  proprietò ID - nome - cognome devono essere valorizzate
//restituisce true altrimenti false


let carta = {  nome: "Giuseppe", cognome: "Fina",id: "111",figli:0 }
console.log(Verificacartadiidentita(carta));
//algoritmo
              

//ID, nome, cognome



// leggo ii nome della prima proprieta oggetto
// confronto che quello che mi aspetto
// (è id oppur nome oppure cognome )
//    Se si l'ho trovato
//     scrivo da qualche parte che ne ho trovato e metto una X

//  leggo il nome della seconda proprietò
// confronto che quello che mi aspetto
// è id oppur nome oppure cognome ?
//    Se si scrivo da qualche parte che ne ho trovato un altro e metto un altra X

 
// devo fa la somma delle X che ho trovato , 0-3

// if la somma == 0 false
// if la somma == 1 false
// if la somma == 2 false
// if la somma == 3 true


           

