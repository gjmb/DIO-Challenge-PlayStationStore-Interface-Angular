import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-price',
  templateUrl: './game-card-price.component.html',
  styleUrls: ['./game-card-price.component.css']
})
export class GameCardPriceComponent {
	@Input()
	gameType:string="";
	@Input()
	gamePrice:string="";

}
