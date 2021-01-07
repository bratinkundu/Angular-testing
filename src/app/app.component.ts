import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   localStorage.setItem("name","Bratin Kundu");
  }
  title = 'Assignment2';
  myname;
  constructor(){
    //this.myname = localStorage.getItem("name");
  }

}
