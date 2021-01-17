import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.None
  /*
  styles: [
    `
    .glyphicon {
      color: green;
    }

    .glyphicon-star {
      background-color: black;
    }
    `
  ]*/

})

export class FavoriteComponent implements OnInit {

  starIconFull: boolean = false;
  @Input('fav-enable-input') favEnable: boolean = true;
  @Output('change-evt-output') changeOutput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toogleStarIcon(){
    if(this.favEnable)
      this.starIconFull = !this.starIconFull;

    this.changeOutput.emit({param1 : this.starIconFull, param2 : "Outra info importante"});
  }

}

export interface eventIsFavObj {
  param1: boolean,
  param2: string
}
