import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';


@Component({
  selector: 'app-show-joke',
  templateUrl: './show-joke.component.html',
  styleUrls: ['./show-joke.component.css'],
})
export class ShowJokeComponent implements OnInit {
  @Input() likeJokeArray!: JOKE[];
  @Output() delLike = new EventEmitter<JOKE>();
  ngOnInit(): void {}

cancella(elemento: JOKE){
  this.delLike.emit(elemento);
}
}
