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
  hasErrors:boolean;
  errorMsgArray:string[];

  constructor(private router:Router, private _tokenService:Angular2TokenService) {
    this.user = new User();
    this.isLogging = true;
  }

  ngOnInit() {
    if (this._tokenService.userSignedIn()) {
    }
  }

  submit(user:User) {
    if (this.isLogging) {
      this._tokenService.signIn(user)
        .subscribe(
          () => {
            this.hasErrors = false;
            this.router.navigate(['cats'])
          },
          (response) => {
            this.hasErrors = true;
            this.errorMsgArray = response.json()['errors']

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
          () => {
            this.hasErrors = false;
            this.router.navigate(['cats'])
          },
          (response) => {
            this.hasErrors = true;
            this.errorMsgArray = response.json()['errors']
          }
        )
    }
  }

  toggleLogin() {
    this.isLogging = !this.isLogging
  }
}
