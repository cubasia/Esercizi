//maurizio then padre
//aurora then figlia
//altrimenti moglie

console.log(iosono("maurizio")); //padre
console.log(iosono("aurora")); //figlia
console.log(iosono("bella de papa")); //moglie

function iosono(chisei) {
  switch (chisei) {
    
      case "maurizio":
          return "padre";
      
      case "aurora":
          return "figlia";
      
      case "bella de papa":
          return "moglie";
      
      default:
        return "moglie"
  }
}
