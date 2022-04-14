import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';
import { EMPTY, fromEvent, interval, map,  mapTo,  merge,  Observable, of, startWith, switchMap, takeWhile, tap } from 'rxjs';
import { HttpclientService } from 'src/app/services/HttpClient/HttpClientServices';


const BASEURL = 'https://v2.jokeapi.dev';
const CATEGORIES = ['Programming', 'Misc', 'Pun', 'Spooky', 'Christmas'];
const PARAMS = ['blacklistFlags=nsfw,religious,racist', 'idRange=0-300'];
const URL = BASEURL + '/joke/' + CATEGORIES.join(',') + '?' + PARAMS.join('&');
const fakeJoke: JOKE = {
    error: false,
    category: '',
    type: 'string',
    flags: {
      fake: true,
    },
    id: 0,
    safe: true,
    lang: 'string',
  };

const jokeObservale2: Observable<JOKE> = of(fakeJoke);
@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.css'],
})
export class JokeContainerComponent implements AfterViewInit {
  constructor(private httpService: HttpclientService) {}
  @ViewChild('pause', { read: ElementRef })
  buttonStop!: ElementRef;
  @ViewChild('resume', { read: ElementRef })
  buttonGo!: ElementRef;

  jokeObservale!: Observable<JOKE>;
  stoppable = false;

  joeLikeArray: JOKE[] = [];
  joeDislikeArray: JOKE[] = [];

  ngAfterViewInit(): void {
    const interval$ = interval(5000).pipe(map((a) => 1));
    const pause$ = fromEvent(this.buttonStop.nativeElement, 'click').pipe(
      map((a: any) => false)
    );

    const resume$ = fromEvent(this.buttonGo.nativeElement, 'click').pipe(
      map((_) => true)
    );
    this.jokeObservale = merge(pause$, resume$).pipe(
      startWith(true),
      tap((n) => (this.stoppable = n)),
      switchMap((val) => (val ? interval$ : EMPTY)),
      switchMap((val) =>
        val > 0 ? this.httpService.getWithUrl<JOKE>(URL) : jokeObservale2
      ),
      takeWhile((v) => {
        if (v.id == 0) return false;
        else return true;
      })
    );
  }

  addLike(element: JOKE): void {
    if (
      !this.joeLikeArray.find((val) => val.id == element.id) &&
      !this.joeDislikeArray.find((val) => val.id == element.id)
    ) {
      this.joeLikeArray.push(element);
    }
  }
  addDislike(element: JOKE): void {
    if (
      !this.joeDislikeArray.find((val) => val.id == element.id) &&
      !this.joeLikeArray.find((val) => val.id == element.id)
    ) {
      this.joeDislikeArray.push(element);
    }
  }
  delLike(element: JOKE): void {
    const index = this.joeLikeArray.findIndex((val) => val.id == element.id);
    this.joeLikeArray.splice(index, 1);
  }
  delDislike(element: JOKE): void {
    const index = this.joeDislikeArray.findIndex((val) => val.id == element.id);
    this.joeDislikeArray.splice(index, 1);
  }
  movLike(element: JOKE): void {
    this.delLike(element);
    this.addDislike(element);
  }
  movDislike(element: JOKE): void {
    this.delDislike(element)
    this.addLike(element)
  }
}
