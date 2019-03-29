import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pokemon, PokemonService} from "./pokemon.service";
import {delay, map, tap} from "rxjs/internal/operators";



@Injectable()
export class LoopbattleService {

  constructor(public pokemonService: PokemonService) {   }

  Battle(poke1:Pokemon, poke2:Pokemon, priority: boolean, tablog:string[]): Observable<null> {



    //BOUCLE DE COMBAT JUSQUA MORT SEN SUIVE AVEC ACTION TOUTES LES 1SECONDES
    const  myLoop = (i, bool) => {
      this.pokemonService.refreshIntervalId=setTimeout(()=> {
        if (--i){
          //APPEL DE LA FONCTION FIGHT
          if(!this.pokemonService.fight(bool, poke1, poke2,tablog))return;
          //ALTERNER LES COMBATS
          myLoop(i, this.pokemonService.alter(bool));
        }      //  decrement i and call myLoop again if i > 0
      }, 1000)
    };
    myLoop(100, priority);

    return null;
  }
}

/*


 */

