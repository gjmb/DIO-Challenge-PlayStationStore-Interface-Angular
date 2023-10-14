import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardLabelComponent } from './game-card-label.component';

describe('GameCardLabelComponent', () => {
  let component: GameCardLabelComponent;
  let fixture: ComponentFixture<GameCardLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCardLabelComponent]
    });
    fixture = TestBed.createComponent(GameCardLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
