//import { DOCUMENT } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  input:any;
  success:boolean = false;
  loggedInUser:User = null;

  error:boolean = false;

  sendRequest:boolean = false;

  constructor(
    private router: Router,
    private as: AccountService
  ) { }

  ngOnInit(): void{
  }

  search(){
    console.log("Search occurred")
    if(this.input != ""){
      this.router.navigate(['../reroute', this.input]);
      this.input = "";
      this.error = false;
    } else {
      console.log("Here")
      this.error = true;
    }
  }

  logout(){
    console.log("Logout")
    this.as.logout();
  }
}