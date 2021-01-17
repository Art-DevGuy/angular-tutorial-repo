import { Component, OnInit } from '@angular/core';
import { eventIsFavObj } from '../favorite/favorite.component';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.css']
})
export class NewSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isActive: boolean = true;
  isHidden: boolean = false;

  stuff: string = "Initial value";

  totalLikes: number= 15;

  post = {
    title: "Hello",
    favEnabled: true
  };

  courses = [1, 2];

  coursesList: { id: number, name: string }[] = [
      { "id": 101, "name": "Math" },
      { "id": 102, "name": "Art" },
      { "id": 103, "name": "Science" },
      { "id": 104, "name": "Literature" },
      { "id": 105, "name": "Computers" }
  ];

  viewMode="map";

  addCourse() {
    this.coursesList.push({ "id": 106, "name":"Sports"});
  }

  removeCourse(course: { id: number, name: string }){
    this.coursesList.splice(this.coursesList.indexOf(course), 1);
  }

  setViewMode(viewMode:string){
    this.viewMode = viewMode;
  }

  onFavoriteChange(eventIsFav: eventIsFavObj){
    console.log("Trigger ->> onFavoriteChange ", eventIsFav);
  };

  likeChange(e: any){
    console.log("Trigger likeChange ->> ", e);
    this.totalLikes = this.totalLikes + e.likeAddSub;

    console.log("Trigger likeChange - total likes = ", this.totalLikes);
  }
/*
  starIconFull = true;
  toogleStarIcon(){
    this.starIconFull = !this.starIconFull;
  }
*/

  onSave($event: any){
    console.log("Button was clicked.", $event);
  }

  onKeyUp($event: any){
    if($event.keyCode === 13)
      console.log("ENTER key was pressed");

    console.log("Event target: " + $event.target.value);

  }

  onLetterXpressed(){
    console.log("Letter X was pressed");
  }

  onEnter(theEmail: any){
    console.log("The email is -> " + theEmail);

  }

  onEnterOther(){
    console.log("Two way binding -> " + this.stuff);
  }

}
