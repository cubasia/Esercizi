import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ShortUser,Role } from 'src/app/module/user-detail/user-detail.module';

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

  setStyles() {
    switch (this.utente?.ruolo)
      {
  case Role.STAFF:
     return 'borderStaff'
  case Role.ADMIN:
     return 'borderAdmin'
  case Role.MANAGER:
        return 'borderManager'
      default:
        return 'borderStaff';
    }
  }
}
