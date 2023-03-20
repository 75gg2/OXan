import {Component, EventEmitter, Output} from '@angular/core';
import {StartGame} from "../data";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  @Output() handleSubmit = new EventEmitter();
  submit(props:StartGame){
    //todo validation
    this.handleSubmit.emit(props)
  }

}
