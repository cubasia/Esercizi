function canPlay() {
  const personName = 'Paul George  plays football';

  if (true) {
   // personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

 // personName += ' plays football'; darebbe errore

  console.log(personName);
}

canPlay();