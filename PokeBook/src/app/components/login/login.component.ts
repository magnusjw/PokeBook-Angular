import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  loginSuccess:boolean = false;

  constructor(
    private as:AccountService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  login(){

    let u:User = new User(0, this.username, this.password, "", "", "");

    this.as.logIn(u).subscribe(
      (response:User)=>{
        this.loginSuccess = true;
        console.log("Login Successful!")
        this.router.navigate(["../user"]);
      },
      ()=>{
        console.log("Login Failed!")
      }
    )
  }
}