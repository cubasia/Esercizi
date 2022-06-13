import { Component, OnInit } from '@angular/core';

interface prodotto {
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  prodotti: prodotto[] = [
    { image: "assets/food/energy.jpg", price: 39.99, description: "Energy Food" },
    { image: "assets/food/beans.jpg", price: 9.99, description: "Beans" },
    { image: "assets/food/peas.jpg", price: 6.99, description: "Peas" },
    { image: "assets/food/spaghetti.jpg", price: 19.99, description: "Spaghetti" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
