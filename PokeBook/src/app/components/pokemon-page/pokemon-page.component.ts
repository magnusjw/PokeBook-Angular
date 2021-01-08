import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  //Api Supports 898 Pokemon
  pokemon:Object = null;
  pokeInput:any;
  loggedInUser: User;
  isFollowed:boolean;
  currFollow:Follow;
  invalidInput:boolean = false;

  messages:Message[];
  content:string;

  likes:Like[];

  constructor(
    private as:AccountService,
    private ps:PokemonService,
    private ms:MessageService,
    private fs:FollowService,
    private ls:LikeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    //Get the proper Page Values
    this.activatedRoute.paramMap.subscribe(params => {

      this.pokeInput = params.get('search');
    });

    this.getPoke(this.pokeInput);

    //Get Current User
    this.as.getLoggedInUser().subscribe((userResult: User) => 
      {
        this.loggedInUser= userResult;

        let f:Follow = new Follow(0, this.loggedInUser, this.pokemon["id"]);
        this.fs.getFollow(f).subscribe((result: Follow) => {
          
          this.currFollow = result;

          if(result == null){
            this.isFollowed = false;
          } else {
            this.isFollowed = true;
          }
        },
        () => {
          console.log("You're not logged in! Intruder!");
          this.router.navigate(["../login"]);
        }
       
        );
      },
    );
    //Render PokemonAPI Information
     //Maybe get poke early on to answer the String input problem

  }

  createMessage() {
    let now = new Date();
    let message = new Message(0, this.pokemon["id"], this.loggedInUser, this.content, now, false);
    this.ms.createMessage(message).subscribe(() => { });
    this.getDiscussionMessages(this.pokemon["id"]);
    this.ngOnInit();
  }

  getDiscussionMessages(pokeInput:number){
    this.ms.getMessagesByPokeId(pokeInput).subscribe(
      (response: Message[]) => {
        for(let i=0; i<response.length; i++){
          response[i].timeStamp = new Date(response[i]["messagePostTime"]);
        }
        this.messages = response;
        
        this.ls.getLikes(this.loggedInUser.id).subscribe((result: Like[]) => {
        
          this.likes = result;
          let likesMessageIds: number[] = [];
          if (this.likes.length>0) {
            for (let i:number = 0;i<this.likes.length;i++) {
              likesMessageIds.push(this.likes[i].message.id);
            }
          }

          for (let i:number = 0;i<this.messages.length;i++) {
            let messageId = this.messages[i].id;
            this.messages[i]["formattedDate"] = this.formatDate(new Date(this.messages[i]["messagePostTime"]));
            if (likesMessageIds.includes(messageId)) {
              this.messages[i].isLiked=true;
            }
          }
        });
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
        this.router.navigate(["../userFeed"]);
      }
    )
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      this.loggedInUser = result;
    });
  }

  formatDate(date)
  {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${ months[date.getMonth()] }. ${ date.getDate() } ${ date.getFullYear() } ${ date.getHours() }:${ date.getMinutes() }`;
  }

  follow(){
    let f:Follow = new Follow(0, this.loggedInUser, this.pokemon["id"]);
    this.fs.createFollow(f).subscribe((result: Follow) => {
      this.currFollow = result;
    });
    this.isFollowed = true;
  }

  unfollow(){
    console.log("Prior to Deletion")
    console.log(this.currFollow)
    this.fs.deleteFollow(this.currFollow).subscribe(() => {});
    this.isFollowed = false;
  }

  createLike(m) {
    let now = new Date();
    m.isLiked = true;
    let like = new Like(0, this.loggedInUser, m);
    this.ls.createLike(like).subscribe(() => { });

  }

  deleteLike(m) {
    let now = new Date();
    m.isLiked = false;
    
    let likeToDelete:Like[];
    this.ls.getLikes(this.loggedInUser.id).subscribe((result: Like[]) => {
      likeToDelete = result;
      console.log(likeToDelete);
      console.log(m);
      for (let i:number = 0;i<likeToDelete.length;i++) {
          if (likeToDelete[i].message.id==m.id) {
            this.ls.deleteLike(likeToDelete[i]).subscribe(() => { });
          }
      }
    });
    
    
  }
  capitalizeFirstLetter(string) : String
  {
    if (string && string.charAt(0))
      return string.charAt(0).toUpperCase() + string.slice(1);
    else
      return "";
  }
}