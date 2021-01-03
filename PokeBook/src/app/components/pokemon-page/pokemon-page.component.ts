import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  public pokemon:Pokemon = null;
  public input:number = 0;

  constructor(private ps:PokemonService) { }

  ngOnInit(): void {
    
  }

  getPoke():void{
    this.ps.getPokemonFromApi(this.input).subscribe(
      (data:Pokemon)=>{ //Assuming that the data returned from getPokemonFromApi will be a pokemon object
        this.pokemon=data;
      },
      ()=>{
        this.pokemon=null;
        console.log("Something went wrong trying to catch your pokemon.");
      }
    )
  }


}