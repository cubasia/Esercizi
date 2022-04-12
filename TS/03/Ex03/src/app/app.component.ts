import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ex03';
  links = ['users', 'orders'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
