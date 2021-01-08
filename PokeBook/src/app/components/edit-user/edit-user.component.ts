//import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service'
import { User } from 'src/app/models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit 
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
    });
  }

  public updateUser(): void
  {
    this.as.updateUser(this.loggedInUser).subscribe((response:User) => 
    {
      this.router.navigate(['../viewUser']);
      console.log("Updated user");
    });
  }
}
