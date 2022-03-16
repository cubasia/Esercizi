
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum Role {
  STAFF = 'staff',
  MANAGER = 'manager',
  ADMIN = 'admin',
}
export interface ShortUser {
  foto: string;
  generalita: string;
  eta: number;
  citta: string;
  ruolo: Role
}

export interface userDetail {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: {
    city: string;
    street: string;
    postalCode: string;
  };
  role: Role;
  username: string;
  profilePhotoUrl: string;
  gender: Gender;
  company: {
    name: string;
    description: string;
  }[];
}

export const USERS: userDetail[] = [
  {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: new Date('1995-12-14'),
    address: {
      city: 'Roma',
      street: 'Via roma 10',
      postalCode: '00100',
    },
    role: Role.STAFF,
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    gender: Gender.MALE,
    company: [],
  },
  {
    id: 12312,
    name: 'Maria',
    surname: 'Rossa',
    age: 26,
    dateOfBirth: new Date('1994-11-10'),
    address: {
      city: 'Palermo',
      street: 'Via Palermo 10',
      postalCode: '90100',
    },
    role: Role.MANAGER,
    username: 'MariaRossa94',
    profilePhotoUrl: 'https://bit.ly/3DWWxuj',
    gender: Gender.FEMALE,
    company: [],
  },
  {
    id: 45645,
    name: 'Elis',
    surname: 'Miao',
    age: 5,
    dateOfBirth: new Date('2016-08-05'),
    address: {
      city: 'Palermo',
      street: 'Via Palermo 120',
      postalCode: '90100',
    },
    role: Role.ADMIN,
    username: 'ElisMiao',
    profilePhotoUrl: 'https://bit.ly/3zU6iH3',
    gender: Gender.FEMALE,
    company: [],
  },
];
