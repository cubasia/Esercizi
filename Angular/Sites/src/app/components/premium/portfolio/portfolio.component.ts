import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any; // used to access jQuery
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') _carousel!: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    const carouselElem = this._carousel.nativeElement;
    const carousel = $(carouselElem).carousel();
  }
  ngOnInit(): void {}
}
