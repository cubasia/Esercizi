import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ShortUser } from '@models';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent {
  @Input()
  utente?: ShortUser;
  @Input()
  indice?: number;
  @Output() cancellaUserEvent = new EventEmitter<number>();
  @Output() vediUserEvent = new EventEmitter<number>();

  constructor() { }

  cancella() {
    this.cancellaUserEvent.emit(this.indice);
  }
  view() {
    this.vediUserEvent.emit(this.indice);
  }

}
