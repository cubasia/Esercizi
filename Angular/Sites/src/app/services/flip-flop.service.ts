import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlipFlopService {
private   _flag = true;
  private _flag2 = false;
  private subject = new BehaviorSubject(this._flag);

  public readonly soggetto: Observable<boolean> =this.subject.asObservable()

  constructor() { }

  get soggetto2() {
    return of(this._flag2)
  }

  Assegna(valore: boolean) {
    this._flag = valore;
    this.subject.next(valore);
  }

  Assegna2(valore: boolean) {
    this._flag2= valore
  }

}
