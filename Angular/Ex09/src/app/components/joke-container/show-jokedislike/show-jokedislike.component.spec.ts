import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJokedislikeComponent } from './show-jokedislike.component';

describe('ShowJokedislikeComponent', () => {
  let component: ShowJokedislikeComponent;
  let fixture: ComponentFixture<ShowJokedislikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJokedislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJokedislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
