import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';


@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  @ViewChild('valore') valueInput!: ElementRef;
  constructor(private counterService: CounterService) { }
  errore=false

  ngOnInit(): void {}
  add() {
   const valueInput:number = this.valueInput.nativeElement.value *1;
   if (this.mostraAllarme(valueInput)) this.counterService.add(valueInput);
  }
  sub() {
    const valueInput = this.valueInput.nativeElement.value *1;
    if (this.mostraAllarme(valueInput)) this.counterService.sub(valueInput);
  }
  check() {
    const valueInput: number = this.valueInput.nativeElement.value * 1;
    this.mostraAllarme(valueInput)
  }

  mostraAllarme(testvalue:number):boolean {
    if (testvalue < 0) {
      this.errore = true;
      setTimeout(() => {
        this.errore = false;
      }, 2000);
      return false
    }
    return true
  }
}
