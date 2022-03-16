export interface userDetail{
  id: number,
  name: string,
  surname: string,
  age: number,
  dateOfBirth: Date,
  address: {
    city: string,
    street: string,
    postalCode: string,
  }
  role: Roles,
  username: string,
  picture:string,
  gender:Gender,
  company: {
    name: string,
    description: string
  }[]
}
export enum Roles{
  staff = "staff"
}
export enum Gender{
  male = "male",
  female="female"
}
