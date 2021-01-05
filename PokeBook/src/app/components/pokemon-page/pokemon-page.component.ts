import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';
import { Pokemon } from 'src/app/models/pokemon';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { FollowService } from 'src/app/services/follow.service';
import { MessageService } from 'src/app/services/message.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon:Pokemon = null; //2x
  pokeInput:any; //2x
  public loggedInUser : User;
  isFollowed:boolean = false;

  pokemonId:number; //Get this regardless of string or number input to get messages

  messages:Message[];
  content:string;

  constructor(
    private as:AccountService,
    private ps:PokemonService,
    private ms:MessageService,
    private fs:FollowService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){

    {
      this.as.getLoggedInUser().subscribe((result: User) => 
      {
        this.loggedInUser= result;
 
      });
    }


    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
       this.pokeInput = Number(params.get('search'));
   });

    console.log("ngOnInit1: " + typeof(this.pokeInput) + " " + this.pokeInput);
    
    this.getPoke(this.pokeInput);
  }

  createMessage() {
    let now = new Date();
    
    let message = new Message(0, this.pokemonId, this.loggedInUser, this.content, now);

    this.ms.createMessage(message);
    this.getDiscussionMessages(this.pokemonId);
  }

  getDiscussionMessages(pokeInput:number){
    this.ps.getMessagesByPokeId(pokeInput).subscribe(
      (response: Message[]) => {
        this.messages = response;
      }
    )
  }


  getPoke(pokeInput):void{
    this.ps.getPokemonFromApi(pokeInput).subscribe(
      (data:Pokemon)=>{ //Assuming that the data returned from getPokemonFromApi will be a pokemon object
        this.pokemon=data;
      },
      ()=>{
        this.pokemon=null;
        console.log("Something went wrong trying to catch your pokemon.");
      }
    )
  }

  follow(){
    this.isFollowed = true;
    console.log("follow Button: " + this.isFollowed);

  }

  unfollow(){
    this.isFollowed = false;
    console.log("Unfollow Button: " + this.isFollowed);
  }


}