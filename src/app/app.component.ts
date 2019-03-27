import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';



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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  //affichage du bouton play/pause
  show: boolean = true;

  //ON CREE NOS DEUX POKEMON
  Poke1 = new Pokemon("Pikachu", 35, 35, 55, 50, 40, 50, 90 , "https://www.pokebip.com/pokedex-images/artworks/25.png");
  Poke2 = new Pokemon("Bulbizarre", 45, 45, 49, 65, 49, 65, 49,  "https://www.pokebip.com/pokedex-images/artworks/1.png");

  //on creer un fichier de log

  tablog:string[]= ["Le combat commence !"];


  isValid = true;

  //Boleen pour play/pause
  boolplaypause =true;
  playpause= "stop";

  //a voir pour les degats
  poke1damage=false;
  poke2damage=false;
  constructor(private pokemonService: PokemonService){
  }

  ngOnInit(){
    //COMBAT COMMENCE
    this.pokemonService.Battle(this.Poke1, this.Poke2,  this.pokemonService.Priority(this.Poke1, this.Poke2), this.tablog);
  }

  onSave($event){

    if(this.boolplaypause){
      this.tablog.push("la partie est stoppé !");
      console.log("Save button is clicked!", $event);
      clearInterval(this.pokemonService.refreshIntervalId);
      this.boolplaypause=false;
        this.playpause="start";
    }else{
      this.tablog.push("la partie reprend !");
      this.pokemonService.Battle(this.Poke1, this.Poke2, null, this.tablog);
        this.boolplaypause=true;
        this.playpause="stop";
    }
  }
}
