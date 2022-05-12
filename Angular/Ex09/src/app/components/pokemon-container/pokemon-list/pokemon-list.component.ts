import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { POKE, Pokemostrato, Tipo_Pokemon } from 'src/app/model/pokemon-interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonObservable!: Observable<POKE>;
  @Input() catturati!: POKE[];
  @Input() rifiutati!: POKE[];

  @Output() cattura = new EventEmitter<POKE>();
  @Output() rifiuta = new EventEmitter<POKE>();
  @Output() cancrifiutati = new EventEmitter<POKE>();
  @Output() canccatturati = new EventEmitter<POKE>();
  @Output() show = new EventEmitter<Pokemostrato>();
  constructor() {}
  selezionato = Tipo_Pokemon.default
  catturato = Tipo_Pokemon.catturato
  rifiutato = Tipo_Pokemon.rifiutato
  showMe(poke: POKE,Tipo:Tipo_Pokemon) {
    let mostrato: Pokemostrato = {
      pokemon: poke,
      tipo: Tipo
    };
    this.show.emit(mostrato);
  }

  cancellaRifiutati(poke: POKE): void {
    this.cancrifiutati.emit(poke);
  }
  cancellaCatturati(poke: POKE): void {
    this.canccatturati.emit(poke);
  }
  catturaPoke(poke: POKE) {
    this.cattura.emit(poke);
  }
  rifiutaPoke(poke: POKE) {
    this.rifiuta.emit(poke);
  }

  ngOnInit(): void {}
}
