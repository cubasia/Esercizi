import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlipFlopService } from 'src/app/services/flip-flop.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private soggetto: FlipFlopService,private router: Router) { }

  ngOnInit(): void {
  }

  cliccato() {
    this.soggetto.Assegna(true);
    this.soggetto.Assegna2(false);
    this.router.navigate([''])
  }
}
