import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { User } from "./user";
import { Config } from "./config";
import {Angular2TokenService} from "angular2-token/angular2-token";


@Injectable()
export class CatsService {
  constructor(private http:Http, private config:Config, private _tokenService: Angular2TokenService) {
  }

  index() {
    let timenow = new Date().getTime();
    return this._tokenService.get('cats')
  }
  shuffle() {
    let timenow = new Date().getTime();
    return this._tokenService.get('cats/shuffle')
  }


  vote(voted, unvoted) {
    let data = JSON.stringify({
      voted: voted,
      unvoted: unvoted
    })
    return this._tokenService.post('cats/vote', data)

  }

  handleErrors(error:Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
