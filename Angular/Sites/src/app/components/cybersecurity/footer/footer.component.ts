import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any; // used to access jQuery
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') _carousel!: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const carouselElem = this._carousel.nativeElement;
    const carousel = $(carouselElem).carousel();
    }
  ngOnInit(): void {}
}
