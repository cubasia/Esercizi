
import { Component, OnInit,Input } from '@angular/core';
import { userDetail } from '@models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() user!: userDetail

  isVisibile = false
  Ale="Alessandra"
  constructor() {}

  ngOnInit(): void {}

}
