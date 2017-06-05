import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import {Config} from "./config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService, private config:Config) {
    this._tokenService.init({
      apiBase: this.config.apiUrl
    });
  }
  title = 'app works!';
}
