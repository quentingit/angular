import { Injectable } from '@angular/core';
//import {LoopbattleService} from "./loopbattle.service";
import {ApikpokemonService} from "./apikpokemon.service";
import {Observable, pipe} from 'rxjs';
import {filter, map} from "rxjs/internal/operators";



//LA CLASSE POKEMON
export class Pokemon {
  constructor(public name: string,
              public pv: number,
              public pvperdu : number,
              public attaque: number,
              public attaqueSpe: number,
              public defense : number,
              public defenseSpe: number,
              public vitesse: number,
              public url: string,
              public urlb: string) {
    this.name = name;
    this.pv = pv;
    this.pvperdu = pvperdu;
    this.attaque =attaque;
    this.attaqueSpe= attaqueSpe;
    this.defense= defense;
    this.defenseSpe= defenseSpe;
    this.vitesse =vitesse;
    this.url =url;
    this.urlb =urlb;
  }
}


@Injectable()
export class PokemonService {



  Poke1:Pokemon;
  Poke2:Pokemon;
  Pokemons:Pokemon[];

//private loopbattleService: LoopbattleService ,
  constructor( private ApikpokemonService: ApikpokemonService)
  {

  }
  //pour savoir qui dois jouer aprez play/pause
  lastprio;
  //pour stopper le jeu
  refreshIntervalId;

  //sauvregarder toutes les données des pokemon
  pokemons;

  //recuperer les pokemon de l'api
  getPokemons(): Observable<null>{


    return this.ApikpokemonService.getPokemons().pipe(
        map(data=>{
            this.Poke1= new Pokemon(
              data[0].name,
              data[0].pv,
              data[0].pvperdu,
              data[0].attaque,
              data[0].attaqueSpe,
              data[0].defense,
              data[0].defenseSpe,
              data[0].vitesse,
              data[0].url,
              data[0].urlb );
            console.log(data);
            this.Poke2= new Pokemon(
              data[1].name,
              data[1].pv,
              data[1].pvperdu,
              data[1].attaque,
              data[1].attaqueSpe,
              data[1].defense,
              data[1].defenseSpe,
              data[1].vitesse,
              data[1].url,
              data[1].urlb );

          return null;
          })
    )


  }

//FONCTION BATTLE ENTRE DEUX POKEMON ET SELON LA
  fight(bool : boolean, poke1: Pokemon, poke2 : Pokemon, tablog:string[]) {
    //ON REGARDE QUELLE EST LE PREMIER POKEMON QUI VA COMBATTRE


    console.log("fight===> ", bool);
    console.log("poke1pv"+ poke1.pvperdu);
    console.log("poke2pv"+ poke2.pvperdu);
    console.log(this.Poke1);

    if (bool == true) {

      poke2.pvperdu = poke2.pvperdu - (poke1.attaque - poke2.defense);
      if(poke2.pvperdu<=0){
        tablog.push("le pokemon " + poke2.name + "  a Perdu ! ");
        return false;
      }else{
        tablog.push("le pokemon " + poke2.name + " perd " + (poke1.attaque - poke2.defense) + " degats");;
        return true;
      }
    } else {

      poke1.pvperdu = poke1.pvperdu - (poke2.attaque - poke1.defense);
      if(poke1.pvperdu<=0){
        tablog.push("le pokemon " + poke1.name + "   a Perdu ! ");
        return false;
      }else{
        tablog.push("le pokemon " + poke1.name + " perd " + (poke2.attaque - poke1.defense) + " degats");
        return true;
      }
    }
  }

//POUR CONNAITRE L'ORDRE DE COMBAT
  Priority(poke1:Pokemon, poke2:Pokemon){
    return (poke1.vitesse > poke2.vitesse) ? true : false ;
  }


  alter(bool){
    return (bool==true)? false :  true;
  }


  /*
  Battle(poke1:Pokemon, poke2:Pokemon, priority: boolean, tablog:string[]){



    //BOUCLE DE COMBAT JUSQUA MORT SEN SUIVE AVEC ACTION TOUTES LES 1SECONDES
    const  myLoop = (i, bool) => {
      this.refreshIntervalId=setTimeout(()=> {
        if (--i){
          //APPEL DE LA FONCTION FIGHT
          if(!this.fight(bool, poke1, poke2,tablog))return;
          //ALTERNER LES COMBATS
          myLoop(i, this.alter(bool));
        }      //  decrement i and call myLoop again if i > 0
      }, 1000)
    };
    myLoop(100, priority);




  }
  */

}

/*

     //En cas de play/pause, on sauvegarde la derniere priorité
    if(priority===null){
      priority=this.lastprio;
    }else{
      this.lastprio= priority;
    }

 */
