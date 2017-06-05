import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { User } from "./user";
import { Config } from "./config";


@Injectable()
export class AuthService {
  constructor(private http:Http, private config:Config) {
  }

  register(user:User) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    return this.http.post(
        this.config.apiUrl + '/auth',
      JSON.stringify({
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation
      }),
      {headers: headers}
      )
      .catch(this.handleErrors);
  }


  handleErrors(error:Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}