import { Injectable } from '@angular/core';

class Pokemon {
  constructor(public name: string,
              public pv: number,
              public pvperdu : number,
              public attaque: number,
              public attaqueSpe: number,
              public defense : number,
              public defenseSpe: number,
              public vitesse: number,
              public url: string) {
    this.name = name;
    this.pv = pv;
    this.attaque =attaque;
    this.attaqueSpe= attaqueSpe;
    this.defense= defense;
    this.defenseSpe= defenseSpe;
    this.vitesse =vitesse;
    this.url =url;
  }
}

@Injectable()
export class PokemonService {

  constructor() { }

  //pour savoir qui dois jouer aprez play/pause
  lastprio;
  //pour stopper le jeu
  refreshIntervalId;


//FONCTION BATTLE ENTRE DEUX POKEMON ET SELON LA
  fight(bool : boolean, poke1: Pokemon, poke2 : Pokemon, tablog:string[]) {
    //ON REGARDE QUELLE EST LE PREMIER POKEMON QUI VA COMBATTRE

    if (bool == true) {

      poke2.pvperdu = poke2.pvperdu - (poke1.attaque - poke2.defense);
      if(poke2.pvperdu<=0){
        tablog.push("le pokemon " + poke2.name + "  a Perdu ! ");
        return false;
      }else{
        tablog.push("le pokemon" + poke2.name + " perd " + (poke1.attaque - poke2.defense) + " degats");;
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

    Battle(poke1:Pokemon, poke2:Pokemon, priority: boolean, tablog:string[]){
    //En cas de play/pause, on sauvegarde la derniere priorité
    if(priority===null){
      priority=this.lastprio;
    }else{
      this.lastprio= priority;
    }

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
}
