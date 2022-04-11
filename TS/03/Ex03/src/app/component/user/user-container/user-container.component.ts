import { Component, OnInit } from '@angular/core';
import { USERS } from '@mockups';
@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
utente = USERS[0]
  constructor() { }

  ngOnInit(): void {
  }

}
