import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  items = ['questo', 'quello', 'per me pari sono'];
  constructor() {}

  ngOnInit(): void {}
}
