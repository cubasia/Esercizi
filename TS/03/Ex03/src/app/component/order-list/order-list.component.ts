import { Component, OnInit } from '@angular/core';
import { userOrder } from 'src/app/module/i-user-order/i-user-order.module';
import { Role, ShortUser } from 'src/app/module/user-detail/user-detail.module';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  testuser?: ShortUser = {
    generalita: 'Mario Rossi' ,
    eta: 25,
    citta: 'Roma',
    foto: 'https://bit.ly/3yRngEP',
    ruolo:Role.ADMIN
  };
  items = [
    {
      user: this.testuser,
      order: 'ordine di questo',
    },
    {
      user: this.testuser,
      order: 'ordine di quello',
    },
    {
      user: this.testuser,
      order: 'ordine di codesto',
    },
  ] as userOrder[];
  constructor() {}

  ngOnInit(): void {}
}
