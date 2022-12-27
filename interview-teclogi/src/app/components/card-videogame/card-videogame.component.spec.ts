import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVideogameComponent } from './card-videogame.component';

describe('CardVideogameComponent', () => {
  let component: CardVideogameComponent;
  let fixture: ComponentFixture<CardVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVideogameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
