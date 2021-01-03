import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;
  userId: number;
  users: User[];

  constructor(private as: AccountService) { }

  ngOnInit(): void {
  }

  register():void{
    this.as.
  }


  }
}
