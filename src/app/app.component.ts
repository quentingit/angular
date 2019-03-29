import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import {LoopbattleService} from "./loopbattle.service";





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //Pour le rendu html après chargement des données des pokemons
  isAvailable:boolean=false;

  //on creer un fichier de log pour les informations de combats
  tablog:string[]= ["Le combat commence !"];

  //affichage du bouton play/pause
  show: boolean = true;

  //Boleen pour play/pause
  boolplaypause =true;
  playpause= "stop";

  //a voir pour animation de degats
  poke1damage=false;
  poke2damage=false;

  //date de debut combat
  dateNow= Date.now();

  //pour utiliser le service Pokemon service
  constructor(public pokemonService: PokemonService,public loopbattleService: LoopbattleService, ){
  }

  //POur initialiser
  ngOnInit(){
    this.pokemonService.getPokemons().subscribe(
      res => {
        this.isAvailable=true;
        this.loopbattleService.Battle(this.pokemonService.Poke1, this.pokemonService.Poke2,  this.pokemonService.Priority(this.pokemonService.Poke1, this.pokemonService.Poke2), this.tablog)
          .subscribe(

          );
      },
      err => {}
      );
  }


  //Fonction pour le bouton Play/Pause
  onSave(){

    console.log("ca vaut:"+ this.isAvailable);
    if(this.boolplaypause){

      this.tablog.push("la partie est stoppée !");
      console.log("Save button is clicked!");
      clearInterval(this.pokemonService.refreshIntervalId);
      this.boolplaypause=false;
        this.playpause="start";
    }else{
      this.tablog.push("la partie reprend !");
        this.loopbattleService.Battle(this.pokemonService.Poke1, this.pokemonService.Poke2, null, this.tablog);
        this.boolplaypause=true;
        this.playpause="stop";
    }
  }
}
