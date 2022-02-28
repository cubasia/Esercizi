const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys


//in realtà l'operatore in restituisce già le proprietà dell'oggetto, senza usare keys
//  for(p in person)
//  {
//     console.log(p +':'+person[p])
//  }
 
//sfruttando il fatto che keys è di fatto un array di proprietà, percorro l'array con un indice
for (i = 0; i < Object.keys(person).length;i++)
{
    p = Object.keys(person)[i];
    console.log(p + ":" + person[p]);
}
