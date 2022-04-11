import { Role,Gender } from '@models';

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
