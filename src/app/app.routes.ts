import { RouterModule, Routes } from "@angular/router";
import {AuthComponent} from "./auth/register/auth.component";
import {CatsComponent} from "./cats/cats.component";
import { Angular2TokenService } from 'angular2-token';
import {CatsContestComponent} from "./cats/cats-contest/cats-contest.component";


const routerConfig:Routes = [
  {path: '', component: AuthComponent },
  {path: "auth", component: AuthComponent},
  {path: "cats", component: CatsComponent, canActivate: [Angular2TokenService]},
  {path: "cats-contest", component: CatsContestComponent, canActivate: [Angular2TokenService]}
];

export const routes = RouterModule.forRoot(routerConfig, {useHash: true});
