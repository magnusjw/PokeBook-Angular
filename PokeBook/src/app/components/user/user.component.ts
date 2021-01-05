import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  messages:Message[];

  constructor(
    private as:AccountService
  ) { }

  ngOnInit(): void {
    this.getLiveFeed();
  }

  getLiveFeed(){
    this.as.getMessagesById(2).subscribe( 
      (response: Message[]) => {
        this.messages = response;

      }
    )
  }
}