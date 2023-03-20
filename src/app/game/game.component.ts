import {Component, Input} from '@angular/core';
import {StartGame, startGameDefaults} from "../data";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input('props') gameProps:StartGame = startGameDefaults;

}
