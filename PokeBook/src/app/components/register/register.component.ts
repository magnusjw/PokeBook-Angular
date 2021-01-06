import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userId: number;
  users: User[];

  route:string;

  form: FormGroup;
  submitted:boolean = false;

  constructor(
    private as: AccountService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required], // *@*.com
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  getUsers() {
    this.as.getUsers().subscribe( //Interpret Response object as an array of users, and then assign local variable
      (response: User[]) => {
        this.users = response;
      }
    )
  }


  register(){
    this.submitted=true;
    let u:User = this.form.value;
    console.log(u)
    this.as.createUser(u).subscribe(
      data => {
        console.log("Successfully Registered");
      },
      error => {
        console.log("Something went wrong");
      });
  }
}