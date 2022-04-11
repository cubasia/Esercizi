import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ShortUser,Role } from '@models';

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
  @Output() cancellaEvent = new EventEmitter<number>();

  constructor() { }

  cancella() {
    this.cancellaEvent.emit(this.indice);
  }

}
