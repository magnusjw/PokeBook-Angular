import { Component, OnInit } from '@angular/core';
import { Follow } from 'src/app/models/follow';
import { User } from 'src/app/models/user';
import { Message } from 'src/app/models/message'
import { AccountService } from 'src/app/services/account.service';
import { FollowService } from 'src/app/services/follow.service';
import { MessageService } from 'src/app/services/message.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit 
{
  loggedInUser: User = new User(0, "", "", "", "", "");;
  favorites: Object[] = new Array(0);
  messages: Message[] = new Array(0);
  msgImage: Object = { };
  msgPkName: Object = { };

  constructor(private as:AccountService, private ps:PokemonService, private ms:MessageService, private fs:FollowService) { }

  ngOnInit(): void
  {
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      this.loggedInUser = result;

      this.fs.getFollowsByUserId(this.loggedInUser.id).subscribe((follows: Follow[]) => 
      {
        this.getFavoritePokemonImages(follows, (fav: Object[]) => 
        {
          this.favorites = fav;
          this.getMessageForFeed(this.favorites, (mes: Message[]) => { this.messages = mes; });
        });
      });
    });
  }

  async getFavoritePokemonImages(follows: Follow[], callback: { (favorites: Object[]): void })
  {
    let favoritePokemonImageSources: Object[] = new Array(follows.length);
    for (let i : number = 0; i < follows.length; i++)
    {
      let pokemon: Object = await this.ps.getPokemonFromApi(follows[i].pokemonId).toPromise();
      favoritePokemonImageSources[i] = favoritePokemonImageSources[i] = { id : pokemon["id"], name : pokemon["name"], src: pokemon["sprites"]["front_default"]};
    }
    callback(favoritePokemonImageSources);
  }

  async getMessageForFeed(favorites : Object[], callback: { (favorites: Message[]): void })
  {
    
    let messagesToMix : Message[] = Array(0);
    for (let i : number = 0; i < favorites.length; i = i + 1)
    {
      messagesToMix = messagesToMix.concat(await this.ms.getMessagesByPokeId(favorites[i]["id"]).toPromise());
    }
    //let result = this.mixArrays(messagesToMix);


    //let result = await this.as.getMessagesById(this.loggedInUser.id).toPromise();
    for (let message of messagesToMix)
    {
      if (message)
      {
        let pokemon: Object = await this.ps.getPokemonFromApi(message.pokemonId).toPromise();
        this.msgImage[message.pokemonId] = pokemon["sprites"]["front_default"];
        this.msgPkName[message.pokemonId] = pokemon["name"];
        message["formattedDate"] = this.formatDate(new Date(message["messagePostTime"]));
      }
    }
    callback(messagesToMix);
  }


  mixArrays(arrays : Message[][]) : Message[]
  {
    let result : Message[] = Array(0);
    if (arrays.length > 0)
    {
      console.log(arrays);
      for (let i : number = 0; i < arrays[0].length; i++)
      {
        for (let j : number = 0; j < arrays.length; j++)
          result.push(arrays[j][i]);
      }
    }
    return result;
  }

  capitalizeFirstLetter(string) : String
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatDate(date)
  {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${ months[date.getMonth()] }. ${ date.getDate() } ${ date.getFullYear() } ${ date.getHours() }:${ date.getMinutes() }`;
  }
}