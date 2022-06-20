import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any; // used to access jQuery


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') _carousel!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const carouselElem = this._carousel.nativeElement;
    const carousel = $(carouselElem).carousel();

  }

  ngOnInit(): void {}
}

