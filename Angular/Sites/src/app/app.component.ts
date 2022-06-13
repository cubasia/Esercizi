import { Component, OnInit } from '@angular/core';

import { FlipFlopService } from './services/flip-flop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sites';


  constructor(private visibilita: FlipFlopService) { }

  get cliccato() {
return  this.visibilita.soggetto2
  }
  get visible() {
    return this.visibilita.soggetto
  }

  naviga() {
    this.visibilita.Assegna(false)
    this.visibilita.Assegna2(true)
  }

  }
