import { Component, OnInit } from '@angular/core';
import { testuser,items } from '@mockups';
@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {
  user = testuser
  lista = items
  
  constructor() { }

  ngOnInit(): void {
  }

}
