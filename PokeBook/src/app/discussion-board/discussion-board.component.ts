import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/message';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-discussion-board',
  templateUrl: './discussion-board.component.html',
  styleUrls: ['./discussion-board.component.css']
})
export class DiscussionBoardComponent implements OnInit {

  pokemon:Pokemon = null;
  input:number = 0;
  messages:Message[];

  constructor(
    private ps:PokemonService,
    private activatedRoute: ActivatedRoute
  ) {
   }

  ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.input = Number(params.get('id'));  
   });
  }

  getDiscussionMessages(){
    this.ps.getMessagesByPokeId(this.input).subscribe(
      (response: Message[]) => {
        this.messages = response;
      }
    )
  }
}
