import { Component, OnInit } from '@angular/core';
import { USERS,ShortUser } from 'src/app/module/user-detail/user-detail.module';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent  {

  items?: ShortUser[] = USERS.map(element => {
        let _short: ShortUser = {
          foto: element.profilePhotoUrl,
          generalita: element.name + ' ' + element.surname,
          eta: element.age,
          citta: element.address.city,
          ruolo: element.role
        };
        return _short
  });

  constructor() {}

  Cancella(indice: number): void {
    this.items?.splice(indice,1)
  }
}
