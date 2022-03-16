import { Component, Input, OnInit } from '@angular/core';
import { userOrder } from 'src/app/module/i-user-order/i-user-order.module';
@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css'],
})
export class OrderSingleComponent implements OnInit {
  @Input()
  ordine?: userOrder;

  constructor() {}

  ngOnInit(): void {}
}
