import { Component, Input, OnInit } from '@angular/core';
import { Role, ShortUser, userOrder } from '@models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  @Input() testuser!: ShortUser;

  
  constructor() {}

  ngOnInit(): void {}
}
