import { Component, Input, OnInit } from '@angular/core';
import { ShortUser } from 'src/app/module/user-detail/user-detail.module';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input()
  utente?: string;
  constructor() {}

  ngOnInit(): void {}
}
