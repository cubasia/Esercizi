import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { POKE } from 'src/app/model/pokemon-interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
@Input() pokemonObservable!:Observable<POKE>
  constructor() { }
  

  ngOnInit(): void {

  }

}
