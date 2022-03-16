import { DatePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Gender, Roles, userDetail } from 'src/app/module/user-detail/user-detail.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  user: userDetail = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: new Date('1995-12-14'),
    address: {
      city: 'Roma',
      street: 'Via Roma 10',
      postalCode: '00100',
    },
    role: Roles.staff,
    username: 'MarioRossi80',
    picture: '\assets\\foto\\gatto.jpg',
    gender: Gender.male,
    company: [
      {
        name: 'Develhope',
        description: 'La migliore',
      },
      {
        name: 'Apple',
        description: 'E insomma',
      },
    ],
  };
  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void { }

  trasformDate(cosa: Date) {
    return this.datepipe.transform(cosa,'dd MMM yyyy')
  }
}
