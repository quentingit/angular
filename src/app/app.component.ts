import { Component } from '@angular/core';


//LA CLASSE POKEMON
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




//FONCTION BATTLE ENTRE DEUX POKEMON ET SELON LA
export function fight(bool : boolean, poke1: Pokemon, poke2 : Pokemon) {
  //ON REGARDE QUELLE EST LE PREMIER POKEMON QUI VA COMBATTRE


  if (bool == true) {
    poke2.pvperdu = poke2.pvperdu - (poke1.attaque - poke2.defense);
    if(poke2.pvperdu<=0){

      setTimeout(function () {
        document.getElementById('poke2').innerHTML = " 0 PV<br>";
        document.getElementById('etat').innerHTML = "le pokemon " + poke2.name + "  <b> a Perdu ! </b><br>";
        document.getElementById('poke2img').innerHTML='<img src="'+ +'" width="120" class="rounded mx-auto d-block"/>';

      }, 1000);

      return false;
    }else{
      setTimeout(function () {
        document.getElementById('poke2').innerHTML = poke2.pvperdu +"/"+ poke2.pv+"PV<br>";
        document.getElementById('etat').innerHTML = "le pokemon " + poke2.name + " perd <b>" + (poke1.attaque - poke2.defense) + " degats</b> <br>";

      }, 1000);
      return true;
    }
  } else {
    poke1.pvperdu = poke1.pvperdu - (poke2.attaque - poke1.defense);
    if(poke1.pvperdu<=0){
      setTimeout(function () {
        document.getElementById('poke1').innerHTML = "0 PV<br>";
        document.getElementById('etat').innerHTML = "le pokemon " + poke1.name + "  <b> a Perdu ! </b><br>";
        document.getElementById('poke1img').innerHTML='<img style="visibility: hidden;opacity: 1;transition: visibility 0s 2s, opacity 2s linear;" src="'+ poke1.url +'" width="150" class="rounded mx-auto d-block"/>';

      }, 1000);
      return false;
    }else{
      setTimeout(function () {
        document.getElementById('poke1').innerHTML = poke1.pvperdu + "/"+ poke1.pv+"PV<br>";
        document.getElementById('etat').innerHTML = "le pokemon " + poke1.name + " perd <b>" + (poke2.attaque - poke1.defense) + " degats </b><br>";
      }, 1000);
      return true;
    }
  }
}

//POUR CONNAITRE L'ORDRE DE COMBAT
export function Priority(poke1:Pokemon, poke2:Pokemon){
  if(poke1.vitesse > poke2.vitesse) return true;
  else return false;
}

function Initier(poke1:Pokemon, poke2:Pokemon){

  document.getElementById('poke1img').innerHTML='<img src="'+poke1.url+'" width="150" class="rounded mx-auto d-block"/>';
  document.getElementById('poke2img').innerHTML='<img src="'+poke2.url+'" width="120" class="rounded mx-auto d-block"/>';

  document.getElementById('poke1').innerHTML = poke1.pv +"/"+ poke1.pv+"PV<br>";
  document.getElementById('poke2').innerHTML = poke2.pv+ "/"+ poke2.pv+"PV<br>";
  document.getElementById('etat').innerHTML = "debut du combat<br>";

}

function alter(bool){
  if(bool==true){
    return false;
  }else{
    return true;
  }
}

function Battle(poke1:Pokemon, poke2:Pokemon){


  //INITIALISATION DES DONNEES POKEMON
  Initier(poke1, poke2);

  //ON FAIS APPEL A LA PRIORITE ET PREMEIR COMBAT
  let boolstart = Priority(poke1, poke2);
  if(!fight(boolstart, poke1, poke2))return;


  //BOUCLE DE COMBAT JUSQUA MORT SEN SUIVE AVEC ACTION TOUTES LES 3SECONDES
  (function myLoop (i, bool) {
    setTimeout(function () {
      if (--i){

        //APPEL DE LA FONCTION FIGHT
        if(!fight(bool, poke1, poke2))return;

        //ALTERNER LES COMBATS
        myLoop(i, alter(bool));
      }      //  decrement i and call myLoop again if i > 0
    }, 2000)
  })(100);

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-killer';

  constructor(){
    //ON CREE NOS DEUX POKEMON
    let Pikachu = new Pokemon("Pikachu", 35, 35, 55, 50, 40, 50, 90 , "https://www.pokebip.com/pokedex-images/artworks/25.png");
    let Bulbizarre = new Pokemon("Bulbizarre", 45, 45, 49, 65, 49, 65, 49,  "https://www.pokebip.com/pokedex-images/artworks/1.png");

    //ON LES FAIS COMBATTRE
    setTimeout(function () {
      Battle(Pikachu, Bulbizarre);
    }, 1000);


  }
}
