import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reroute',
  templateUrl: './reroute.component.html',
  styleUrls: ['./reroute.component.css']
})
export class RerouteComponent implements OnInit {

  input:any;

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.input = params.get('search');

    });
    this.router.navigate(['../pokemon', this.input]);
  }

}
