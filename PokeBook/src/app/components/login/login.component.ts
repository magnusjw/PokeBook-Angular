import { Component, OnInit } from '@angular/core';
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

  currUser:User;

  constructor(private as:AccountService) { }

  ngOnInit(): void {
  }

  login(){
    let u = new User(0, this.username, this.password, "", "", "")
    this.as.logIn(u).subscribe(
      (response:User)=>{
        this.loginSuccess = true;
        this.currUser = response;
      },
      ()=>{
        this.currUser=null;
      }
    )
    
  }

}