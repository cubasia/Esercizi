import { Component, OnInit } from '@angular/core';
import { userOrder } from 'src/app/module/i-user-order/i-user-order.module';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  items = [
    {
      user: "questo",
      order: "ordine di questo"
    },
    {
      user: "quello",
      order: "ordine di quello"
    },
    {
      user: "codesto",
      order: "ordine di codesto"
    }
  ] as userOrder[]
  constructor() { }

  ngOnInit(): void {
  }

}
