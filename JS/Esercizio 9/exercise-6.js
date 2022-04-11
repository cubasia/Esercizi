function getKeys(obj) {
  
  let foglio= []
  //....
 // console.log(obj.length);
  for (const property in obj) { //cicla per tutte le proprietà dell'array
    //console.log(property);
    foglio.push(property); //property vale il nome della proprietà
    //obj[property] - valore della proprietà
  }
  return foglio
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const pippo = {
  treno: "ss",
  orario: "s",
};

console.log(getKeys(person));
console.log(getKeys(pippo));


//Execute getKey  parametro person
//let obj = person
//esegue



//Implementare la funzione `getKeys`,
// la quale, dato in input un oggetto,
// restituisce un array che contiene i nomi delle proprietà dell'oggetto

//nominativi[0]="firtsName"
//nominativi[1]="lastsName"
//nominativi[2]="age"


//TOP-DOWN
//1 che me stanno a di
//2 metto in un algoritmo

//1. prendo foglio di carta vuoto
//2. guardo la prima proprietà oggetto
//3. scrivo sul foglio di carta la proprietà
//4. guardo la secondo proprietà oggetto
//5. scrivo sul foglio di carta la seconda proprietà
//6. e cosi via fino alla fine
//7. vado da GF e gli do il foglio

//step by step 



