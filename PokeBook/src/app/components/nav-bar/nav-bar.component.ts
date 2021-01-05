import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  pokemon:Pokemon = null;
  input:number = 0;
  success:boolean = false;

  constructor(
    private ps:PokemonService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  search(){
    this.router.navigate(["../pokemon", this.input]);
    console.log(this.input);
  }

  searchDiscussion(){
    console.log(1);
    this.router.navigate(["../discussion", this.input]);
    console.log(this.input);
    console.log(2);
  }
}