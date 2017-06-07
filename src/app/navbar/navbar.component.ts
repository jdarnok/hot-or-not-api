import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Angular2TokenService} from "angular2-token/angular2-token";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService, private router: Router) { }

  ngOnInit() {
  }

  isLogged() {
    return this._tokenService.userSignedIn()
  }
  logOut() {
    this._tokenService.signOut().subscribe(
      res =>      {
        this.router.navigate([''])
      },
      error =>    console.log(error)
    );
  }

}
