import { DatePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/module/user-detail/user-detail.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user = USERS[0]

  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {}

  trasformDate(cosa: Date) {
    return this.datepipe.transform(cosa, 'dd MMM yyyy');
  }
}
