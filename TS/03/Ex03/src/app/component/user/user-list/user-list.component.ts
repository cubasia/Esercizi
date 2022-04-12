import { Component, EventEmitter,Output } from '@angular/core';
import { ShortUser } from '@models';
import { USERS} from '@mockups';

const NO_ELEMENTS = -1
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  @Output() viewItemEvent = new EventEmitter<number>();

  viewItem(indice: number) {
    this.viewItemEvent.emit(this.items[indice].id);
  }

  items: ShortUser[] = USERS.map((element) => {
    let _short: ShortUser = {
      id: element.id,
      foto: element.profilePhotoUrl,
      generalita: element.name + ' ' + element.surname,
      eta: element.age,
      citta: element.address.city,
      ruolo: element.role,
    };
    return _short;
  });

  constructor() {}

  Cancella(indice: number): void {
    this.items?.splice(indice, 1);
    if (this.items.length > 0)
      this.viewItemEvent.emit(this.items[0].id);
    else
      this.viewItemEvent.emit(NO_ELEMENTS);
  }

}
