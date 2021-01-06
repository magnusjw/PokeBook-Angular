import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  input:any;
  success:boolean = false;

  constructor(

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
    this.router.navigate(["../discussion", this.input]);
    console.log(this.input);
  }
}