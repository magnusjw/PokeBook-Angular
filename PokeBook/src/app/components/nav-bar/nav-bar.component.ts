import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    console.log(1);
     this.router.navigate(["../pokemon", this.input]);
     console.log(2);

  }

}
