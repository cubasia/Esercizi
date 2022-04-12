import { Component, OnInit } from '@angular/core';
import { USERS } from '@mockups';
import { ShortUser, userDetail } from '@models';
@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  utente:userDetail = USERS[0];
  visibleUser = true;
  constructor() {}

  ngOnInit(): void {}
  viewItem(userId: number) {
    if (userId>0)
    {
      let index = USERS.findIndex((element) => element.id == userId);
      this.utente = USERS[index];
    }
    else
      this.visibleUser = false
   }
}
