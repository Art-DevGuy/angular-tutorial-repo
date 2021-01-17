import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  isLiked: boolean = false;

  @Input("total-likes-input") currentLikes: number = 0;
  @Output("like-evt-output") likeOutput = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  addLike(){
    console.log("like component - addLike");
    this.isLiked = !this.isLiked;

    if(this.isLiked)
    {
      this.currentLikes = this.currentLikes + 1;
      this.likeOutput.emit({likeAddSub: 1});
    }
    else
    {
      this.currentLikes = this.currentLikes - 1;
      this.likeOutput.emit({likeAddSub: -1});
    }

  }

}
