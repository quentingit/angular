import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click/click-me.component';
import {PokemonService} from "./pokemon.service";

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
