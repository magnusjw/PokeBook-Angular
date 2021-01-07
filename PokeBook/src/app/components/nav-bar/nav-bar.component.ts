//import { DOCUMENT } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  input:any;
  success:boolean = false;
  loggedInUser:User = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void{
  }

  search(){
    if(this.input != ""){
      this.router.navigate(['../pokemon', this.input]);
      this.input = "";
    }
  }
}