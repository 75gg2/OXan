import {Component, Input} from '@angular/core';
import {FieldValue} from "../data";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input('n') n: number = 0;
  @Input('m') m: number = 0;

  @Input() boardState: FieldValue[][] = [];
}
