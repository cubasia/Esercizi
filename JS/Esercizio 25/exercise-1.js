const person = {
  name: "1",
  lastname:"1",
  get firstName() {
    this.name;
  },
  set firstName(name) {
    this.name = name;
  },
  get lastName() {
    this.lastname;
  },
  set lastName(lastname) {
    this.lastname = lastname;
  },
  fullName: function () {
    return (this.firstName +' '+this.lastName )
  }
};

const john = { ...person }
const simon = { ...person };

john.firstName = "John"
john.lastName = "Doe"
simon.firstName = "Simon";
simon.lastName = "Collins";


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
