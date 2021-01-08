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
      this.router.navigate(['../pokemon', this.input]);
      this.input = "";
    }
  }

  logout(){
    console.log("logout")
    this.as.logout();
    this.router.navigate(['../login']);
  }
}