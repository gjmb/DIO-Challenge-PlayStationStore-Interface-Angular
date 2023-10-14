import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card-label',
  templateUrl: './game-card-label.component.html',
  styleUrls: ['./game-card-label.component.css']
})
export class GameCardLabelComponent {
	@Input()
	gameLabel:string="";

}
