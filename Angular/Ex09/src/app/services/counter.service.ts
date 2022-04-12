import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = 0
  constructor() { }

  add(addendo = 1) {
    if (addendo < 0) console.log('invalid value < 0');
    else {
      this.counter += addendo;
      console.log(this.get());
    }
  }

  get() {
    return this.counter
  }
  sub(addendo = 1) {
    if (addendo < 0)
      console.log("invalid value < 0")
    else if (this.counter - addendo < 0)
      console.log("invalid value, too high")
    else this.counter-=addendo
  }
}
