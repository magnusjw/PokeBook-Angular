import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { PokemonPageComponent } from '../pokemon-page/pokemon-page.component';

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
    this.router.navigate(['../pokemon', this.input]);
    //this.poke.ngOnInit;
    console.log("Search() called with " + this.input);
  }
}