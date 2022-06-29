import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('email', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required, Validators.minLength(6)])

  });

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
  }

}
