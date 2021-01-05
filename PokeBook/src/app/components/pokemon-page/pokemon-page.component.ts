import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Follow } from 'src/app/models/follow';
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

  pokemon:Object = null; //2x
  pokeInput:any; //2x
  loggedInUser: User;
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
    //Get Current User
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      console.log(result);
      this.loggedInUser= result;

      //Confirm if this page is being followed by this user
      let f:Follow = new Follow(0, result, this.pokeInput);
      console.log("Follows that Im getting: " + f.user.id);
      this.fs.getFollow(f).subscribe(() => {});

      console.log("Followed: " + this.isFollowed);
    });

    this.activatedRoute.paramMap.subscribe(params => {

       this.pokeInput = Number(params.get('search'));
   });

    //Render PokemonAPI Information

    this.getPoke(this.pokeInput);
  }

  createMessage() {
    let now = new Date();
    let message = new Message(0, 25, this.loggedInUser, this.content, now);
    this.ms.createMessage(message).subscribe(() => { });
    this.getDiscussionMessages(this.pokemon["id"]);
  }

  getDiscussionMessages(pokeInput:number){
    this.ps.getMessagesByPokeId(pokeInput).subscribe(
      (response: Message[]) => {
        this.messages = response;
        console.log(new Date(response[0]["messagePostTime"]));
      }
    )
  }

  getPoke(pokeInput):void{
    this.ps.getPokemonFromApi(pokeInput).subscribe(
      (data:Object)=>{ //Assuming that the data returned from getPokemonFromApi will be a pokemon object
        this.pokemon=data;
        this.getDiscussionMessages(this.pokemon["id"]);
      },
      ()=>{
        this.pokemon=null;
        console.log("Something went wrong trying to catch your pokemon.");
      }
    )
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      this.loggedInUser = result;
    });
  }

  follow(){
    console.log("follow Button: " + this.isFollowed);
    let f:Follow = new Follow(0, this.loggedInUser, this.pokemonId);
    this.fs.createFollow(f).subscribe(() => {});
    this.isFollowed = true;
  }

  unfollow(){
    console.log("Unfollow Button: " + this.isFollowed);
    let f:Follow = new Follow(0, this.loggedInUser, this.pokemonId);
    this.fs.deleteFollow(f).subscribe(() => {});
    this.isFollowed = false;
  }
}