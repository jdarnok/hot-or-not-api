import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from "../../auth.service";
import {Angular2TokenService} from "angular2-token"
import {User} from "../../user";

@Component({
  selector: 'app-register',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user:User;
  isLogging:boolean;

  constructor(private authService:AuthService, private router:Router, private _tokenService:Angular2TokenService) {
    this.user = new User();
    this.isLogging = true;
  }

  ngOnInit() {
  }

  submit(user:User) {
    if (this.isLogging) {
      this._tokenService.signIn(user)
        .subscribe(
          (response) => {
            console.log(response)
            this.router.navigate(['cats'])
          }
        )

    } else {
      this._tokenService.registerAccount({
          email: user.email,
          password: user.password,
          passwordConfirmation: user.passwordConfirmation
        }
        )
        .subscribe(
          (response) => {
            console.log(response)

            this.router.navigate(['cats'])
          },
          (response) => {
            console.log('error', response)
          }
        )
    }
  }

  toggleLogin() {
    this.isLogging = !this.isLogging
  }
}
