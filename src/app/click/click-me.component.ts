import {Component, HostBinding, Input, OnInit, Output, ViewChildren} from '@angular/core';
import {AppComponent} from '../app.component';
import {interval} from "rxjs/index";
import {Directive} from "@angular/compiler/src/core";

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css'],
  template: `

    <button style="padding:10px; margin-top: 20px; border:none; width:100px; background-color:#333;color:#fff; "
            (click)="onClickMe()">{{playpausebutton}}</button>
    `
})


export class ClickMeComponent {
  @Input() playpausebutton="Stop";
  clickMessage = '';
  //<div [colorlog]="log"> {{log}} hello</div>
  //@Input('colorlog') log ='red';

}
