import {Component, EventEmitter, Output} from '@angular/core';
import {StartGame} from "../data";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  @Output() handleSubmit = new EventEmitter();
  submit(props: { m:string,n:string,p:string }){
    let gameProps:StartGame = {
      m:parseInt(props.m),
      n:parseInt(props.n),
      p:parseInt(props.p)
    }
    //todo validation
    this.handleSubmit.emit(gameProps)
  }

}
