import { Component, OnInit } from '@angular/core';
interface prodotto {
  image: string;
 title: string;
  description: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  prodotti: prodotto[] = [
    {
      image: 'assets/foto/Woman1.jpg',
      title: 'Best Quality Product',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sequi nihil consectetur, corporis voluptas alias natus!',
    },
    {
      image: 'assets/foto/arance.jpg',
      title: 'Organic Food',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sequi nihil consectetur, corporis voluptas alias natus!',
    },
    {
      image: 'assets/foto/Woman2.jpg',
      title: 'Best Quality Food',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sequi nihil consectetur, corporis voluptas alias natus!',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
