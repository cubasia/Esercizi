import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJokeComponent } from './show-joke.component';

describe('ShowJokeComponent', () => {
  let component: ShowJokeComponent;
  let fixture: ComponentFixture<ShowJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
