import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;

  public user:User;

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  login():void{
    this.ls.userLogIn(this.username, this.password).subscribe(
      (data:User)=>{
        this.user=data;
      },
      ()=>{
        this.user=null;
        console.log("Something went wrong trying to catch your user.");
      }
    )
    
  }

}
