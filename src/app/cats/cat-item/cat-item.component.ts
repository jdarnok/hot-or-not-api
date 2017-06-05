import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CatsService} from "../../cats.service";

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent implements OnInit {
  @Input() catUrl: string;
  @Input() catId: number;
  @Input() votable: boolean;
  @Input() rating: number;
  @Output() catVoted = new EventEmitter();
  constructor(private _catsService: CatsService) { }

  ngOnInit() {
  }

  vote(id) {
    this.catVoted.emit(id)

  }
}
