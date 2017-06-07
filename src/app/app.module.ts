import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {AuthService} from "./auth.service";
import {routes} from "./app.routes";
import { AuthComponent } from './auth/register/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Config} from "./config";
import { CatsComponent } from './cats/cats.component';
import {CatsService} from "./cats.service";
import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { CatItemComponent } from './cats/cat-item/cat-item.component';
import { CatsContestComponent } from './cats/cats-contest/cats-contest.component';
import { CatsListComponent } from './cats/cats-list/cats-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    CatsComponent,
    CatItemComponent,
    CatsContestComponent,
    CatsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    A2tUiModule
  ],
  providers: [AuthService, Config, CatsService, Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
