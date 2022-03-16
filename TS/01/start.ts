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

enum TypeGenger {
    male = "male",
    female = "female",
    other = "other"
    
}
enum TypeRole {
    staff = "staff",
    student= "strudent",
    manager= "manager",
    admin= "admin"     
}
interface address {
    city: string
    street: string
    postalCode: string
}

interface company {
  id: number
  name: string
  description: string
  location: address
}
interface anagrafica {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: address;
  role: TypeRole
  username: string
    profilePhotoUrl: string
    companies: company[]
    gender : TypeGenger
    
}

//se accetta questa istruzione allora funziona
const verifica: anagrafica = obj
