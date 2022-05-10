import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { POKE } from 'src/app/model/pokemon-interface';
import {PokemonServiceService}from '../../services/pokemon/pokemon-service.service';
@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css'],
  providers: [PokemonServiceService],
})
export class PokemonContainerComponent implements OnInit {
  constructor(private pokemonService:PokemonServiceService ) {}
pokemon!:Observable<POKE>
  ngOnInit(): void {
    this.pokemon = this.pokemonService.Pokemon
  }
}
