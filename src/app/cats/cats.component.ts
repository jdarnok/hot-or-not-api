import { Component, OnInit } from '@angular/core';
import {CatsService} from "../cats.service";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats:Array<any>;

  constructor(private _catsService:CatsService) {
  }

  ngOnInit() {
    this.loadCats()
  }

  reloadCats(id) {
    let voted_cat = this.findById(this.cats, id);
    let index = this.cats.indexOf(voted_cat)
    if (index > -1) {
      this.cats.splice(index, 1);
    }
    let unvoted_cat = this.cats[0];
    this._catsService.vote(voted_cat.id, unvoted_cat.id).subscribe(
      () => {
        this.loadCats()
      },
      () => {
      }
    )
  }

  loadCats() {
    this._catsService.index().subscribe(
      (response) => {
        this.cats = response.json();
      },
      (error_response) => {
        console.log(error_response)
      }
    )
  }


  findById(source, id) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].id === id) {
        return source[i];
      }
    }
    throw "Couldn't find object with id: " + id;
  }
}
