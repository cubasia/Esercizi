import { DatePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/Mock-up/users.mock-up';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user = USERS[0]
  isVisibile = false
  Ale="Alessandra"
  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {}

  trasformDate(cosa: Date) {
    return this.datepipe.transform(cosa, 'dd MMM yyyy');
  }
}
