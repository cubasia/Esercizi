import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';

@Component({
  selector: 'app-show-jokedislike',
  templateUrl: './show-jokedislike.component.html',
  styleUrls: ['./show-jokedislike.component.css'],
})
export class ShowJokedislikeComponent implements OnInit {
  @Input() dislikeJokeArray!: JOKE[];
  @Output() delDislike = new EventEmitter<JOKE>();
  constructor() {}

  ngOnInit(): void {}
  cancella(elemento: JOKE) {
    this.delDislike.emit(elemento);
  }
}
