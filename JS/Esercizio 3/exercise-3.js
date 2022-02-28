const students = ["Paul", "George", "Lucas"];

function addStudent(student) {
  students.push(student);
}

addStudent("Marco");
console.log(students);

function calculateSalary(ruolo) {
//  console.log(ruolo);
  let risposta = "0€"; //valore in caso nessuna condizione sia vera
  if (ruolo == "ceo") risposta = "2200€"
  else if (ruolo == "manager") risposta = "1800€"
  else {
    if (ruolo == "developer") risposta = "1500€"
    else if (ruolo === "default")
    risposta = "1000€"
  }
  return risposta;
}
console.log(calculateSalary("default")); //1000€

function calculateSalary2(ruolo) {
  //  console.log(ruolo);
//  let risposta = "0€"; //valore in caso nessuna condizione sia vera

  switch(ruolo) {
    case "ceo":
      return "2200€";
      
    case "manager":
      return  "1800€";
      
    case "developer":
      return "1500€";
      
    case "default":
      return "1000€";
    default : return "0€";
  }
  
}
console.log(calculateSalary2("developer")); //1500€
