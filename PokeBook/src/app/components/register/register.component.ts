import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;


  userId: number;
  users: User[];

  
  constructor(private as: AccountService) { }

  ngOnInit(){
  }

  getUsers() {
    this.as.getUsers().subscribe( //Interpret Response object as an array of users, and then assign local variable
      (response: User[]) => {
        this.users = response;
      }
    )
  }


  register(){
    let u = new User(0, this.username, this.password, this.firstname, this.lastname, this.email);
    this.as.createUser(u).subscribe(

    );
  }


}
