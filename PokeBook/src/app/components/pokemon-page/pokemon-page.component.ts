import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Follow } from 'src/app/models/follow';
import { Like } from 'src/app/models/like.model';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { FollowService } from 'src/app/services/follow.service';
import { LikeService } from 'src/app/services/like.service';
import { MessageService } from 'src/app/services/message.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon:Object = null;
  pokeInput:any;
  loggedInUser: User;
  isFollowed:boolean = false;
  currFollow:Follow;

  messages:Message[];
  content:string;

  constructor(
    private as:AccountService,
    private ps:PokemonService,
    private ms:MessageService,
    private fs:FollowService,
    private ls:LikeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    //Get the proper Page Values
    this.activatedRoute.paramMap.subscribe(params => {
      this.pokeInput = Number(params.get('search'));
    });

    //Get Current User
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      this.loggedInUser= result;

      //Confirm if this page is being followed by this user
      let f:Follow = new Follow(0, result, this.pokeInput);

      this.fs.getFollow(f).subscribe((result: Follow) => {
        this.currFollow = result;
        if(result == null){
          this.isFollowed == false;
        } else {
          this.isFollowed == true;
        }
      });
    });

    //Render PokemonAPI Information
    this.getPoke(this.pokeInput);
  }

  createMessage() {
    let now = new Date();
    let message = new Message(0, this.pokemon["id"], this.loggedInUser, this.content, now);
    this.ms.createMessage(message).subscribe(() => { });
    this.getDiscussionMessages(this.pokemon["id"]);
  }

  getDiscussionMessages(pokeInput:number){
    this.ps.getMessagesByPokeId(pokeInput).subscribe(
      (response: Message[]) => {
        this.messages = response;
        //console.log(new Date(response[0]["messagePostTime"]));
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
    let f:Follow = new Follow(0, this.loggedInUser, this.pokemon["id"]);
    this.fs.createFollow(f).subscribe((result: Follow) => {
      this.currFollow = result;
    });
    this.isFollowed = true;
  }

  unfollow(){
    this.fs.deleteFollow(this.currFollow).subscribe(() => {});
    this.isFollowed = false;
  }

  createLike() {
    let now = new Date();
    let message = new Message(30, this.pokemon["id"], this.loggedInUser, this.content, now);
    //hard coding message ID of 30, find out how to get message ID later
    let like = new Like(0, this.loggedInUser, message);
    this.ls.createLike(like).subscribe(() => { });

  }

  
}