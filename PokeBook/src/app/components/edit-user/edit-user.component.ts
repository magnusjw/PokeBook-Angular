import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service'
import { User } from 'src/app/models/user'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit 
{
  public loggedInUser : User;
  constructor(private as: AccountService) 
  {
    this.loggedInUser = new User(0, "Loading...", "Loading...", "Loading...", "Loading...", "Loading...");
  }

  ngOnInit(): void 
  {
    this.as.getUser(0).subscribe((result: User) => 
    {
      this.loggedInUser.username = result.firstName;
      this.loggedInUser.password = result.password;
      this.loggedInUser.firstName = result.firstName;
      this.loggedInUser.lastName = result.lastName;
      this.loggedInUser.email = result.email;
    });
  }


}
