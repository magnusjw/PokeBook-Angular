import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon:Pokemon = null;
  input:number = 0;

  constructor(
    private ps:PokemonService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){

    //this.input = Number(this.activatedRoute.snapshot.paramMap.get("input"));

    this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.input = Number(params.get('id'));  
   });

    console.log("ngOnInit1: " + this.input);
    this.getPoke(this.input);

  }

  getPoke(input:number):void{
    this.ps.getPokemonFromApi(input).subscribe(
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