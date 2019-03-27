import {Component, Input, OnInit, Output, ViewChildren} from '@angular/core';
import {AppComponent, refreshIntervalId} from '../app.component';
import {interval} from "rxjs/index";

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css'],
  template: `
    <button style="padding:10px; margin-top: 20px; border:none; width:100px; color:#fff; background: #333;"
            (click)="onClickMe()">Stop</button>
    {{clickMessage}}`
})

export class ClickMeComponent {
  clickMessage = '';
  @Output() pause ;
  @Input() count: number;

   playpause= true;
   id;


  onClickMe() {

/*

    if(this.playpause){
      console.log("stop fight");
      this.playpause=false;
      this.id=refreshIntervalId;
      console.log("refresh vaut : "+ refreshIntervalId);
      clearInterval(refreshIntervalId);
      //refreshIntervalId=0;
      //this.clickMessage = 'program stop!';

      //document.getElementById('buttonplaypause').innerHTML='<button style="padding:10px; margin-top: 20px; border:none; width:100px; color:#fff; background: #333;" (click)="onClickMe()">Play</button>';



    }else{
      console.log("start fight");
      this.playpause=true;

      //this.clickMessage = 'program stop!';
      //document.getElementById('buttonplaypause').innerHTML='<button style="padding:10px; margin-top: 20px; border:none; width:100px; color:#fff; background: #333;" (click)="onClickMe()">Stop</button>';
    }

*/



  }
}
