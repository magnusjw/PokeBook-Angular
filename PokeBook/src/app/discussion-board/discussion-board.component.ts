import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/message';
import { Pokemon } from '../models/pokemon';
import { MessageService } from '../services/message.service';
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
  content:string;
  
  constructor(
    private ps:PokemonService,
    private activatedRoute: ActivatedRoute,
    private ms:MessageService
  ) {
   }

  ngOnInit(): void {

      this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this.input = Number(params.get('id'));  
   });
  }

  createMessage(content) {
    const date = new Date(Date.now());
    let message = new Message(0, 25, 9, this.content, date);
    this.ms.createMessage(message);
    this.getDiscussionMessages();
  }

  
  getDiscussionMessages(){
    this.ps.getMessagesByPokeId(25).subscribe(
      (response: Message[]) => {
        this.messages = response;
      }
    )
  }
}
