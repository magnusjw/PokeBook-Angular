import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit 
{
  public loggedInUser : User;

  constructor(private as: AccountService, private router:Router) 
  {
    this.loggedInUser = new User(0, "Loading...", "Loading...", "Loading...", "Loading...", "Loading...");
  }

  ngOnInit(): void
  {
    this.as.getLoggedInUser().subscribe((result: User) => 
    {
      this.loggedInUser.username = result.username;
      this.loggedInUser.password = result.password;
      this.loggedInUser.firstName = result.firstName;
      this.loggedInUser.lastName = result.lastName;
      this.loggedInUser.email = result.email;
    },
    ()=>{
      console.log("You're not logged in! Intruder!");
      this.router.navigate(["../login"]);
    });
  }

}
