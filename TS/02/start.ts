//Creare una classe che implementi l'interfaccia dell'esercizio precedente
// ed esponga un metodo che restituisca il fullName

enum TypeGenger {
  male = "male",
  female = "female",
  other = "other",
}
enum TypeRole {
  staff = "staff",
  student = "strudent",
  manager = "manager",
  admin = "admin",
}
interface address {
  city: string;
  street: string;
  postalCode: string;
}

interface company {
  id: number;
  name: string;
  description: string;
  location: address;
}


class User {
  private id: number;
  private name: string;
  private surname: string;
  private age: number;
  private dateOfBirth: string;
  private address: address;
  private role: TypeRole;
  private username: string;
  private profilePhotoUrl: string;
  private companies: company[];
  private gender: TypeGenger;

  constructor(
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: address,
    role: TypeRole,
    username: string,
    profilePhotoUrl: string,
    companies: company[],
    gender: TypeGenger
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.role = role;
    this.username = username;
    this.profilePhotoUrl = profilePhotoUrl;
    this.companies = companies;
    this.gender = gender;
  }

  getFullname() {
    return `${this.name} ${this.surname}`;
  }
}


const obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: 'staff' as TypeRole, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: 'male' as TypeGenger // Generi possibili: 'male', 'female', 'other'
}

// CODE HERE



//se accetta questa istruzione allora funziona

const verifica2: User = new User(
    obj.id, obj.name, obj.surname, obj.age, obj.dateOfBirth,
    obj.address, obj.role, obj.username, obj.profilePhotoUrl,
    obj.companies, obj.gender

)

console.log(verifica2.getFullname())

