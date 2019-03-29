import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click/click-me.component';
import {PokemonService} from "./pokemon.service";
import {ApikpokemonService} from "./apikpokemon.service";
import {LoopbattleService} from "./loopbattle.service";

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokemonService, ApikpokemonService, LoopbattleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
