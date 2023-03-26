import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BoardScheme, FieldValue} from "../data";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @Output() handleMove = new EventEmitter()
  @Input('n') n: number = 0;
  @Input() points: {x:number,o:number} = {x:0, o:0};
  @Input('m') m: number = 0;

  @Input() boardState: BoardScheme = [];
}


