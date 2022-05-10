import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { POKE } from 'src/app/model/pokemon-interface';
import { HttpclientService } from '../../services/HttpClient/HttpClientServices'

const URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKENUMBER=1126
@Injectable()
export class PokemonServiceService {
  constructor(private Httpclient: HttpclientService) { }

  pokemonCatturatiArray: POKE[]=[]
  pokemonRifiutatiArray: POKE[]=[]

  get Pokemon(): Observable<POKE> {
     const numero = Math.trunc(POKENUMBER * Math.random())
      const newUrl = URL + numero.toString()
      return this.Httpclient.getWithUrl<POKE>(newUrl)
  }

  get pokemonCatturati():POKE[] {
    return this.pokemonCatturatiArray
  }
  get pokemonRifiutati():POKE[] {
    return this.pokemonRifiutatiArray
  }
  cattura(pokemon:POKE) {
    this.pokemonCatturatiArray = [...this.pokemonCatturatiArray,pokemon]
  }
  rifiuta(pokemon:POKE) {
    this.pokemonRifiutatiArray = [...this.pokemonRifiutatiArray, pokemon];
  }
  cancellaCatturati(pokemon: POKE) {
    this.pokemonCatturatiArray = this.pokemonCatturatiArray.filter(elemento => elemento.id!== pokemon.id);
  }
  cancellaRifiutati(pokemon: POKE) {
    this.pokemonRifiutatiArray = this.pokemonRifiutatiArray.filter(elemento => elemento.id!== pokemon.id);
  }

}
