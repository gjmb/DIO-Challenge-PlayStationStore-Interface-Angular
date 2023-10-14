import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardPriceComponent } from './game-card-price.component';

describe('GameCardPriceComponent', () => {
  let component: GameCardPriceComponent;
  let fixture: ComponentFixture<GameCardPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCardPriceComponent]
    });
    fixture = TestBed.createComponent(GameCardPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
