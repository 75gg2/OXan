import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent {
  @Input() message = ""
  reset(){
    window.location.reload()
  }
}
