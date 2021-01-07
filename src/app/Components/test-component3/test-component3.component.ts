import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component3',
  templateUrl: './test-component3.component.html',
  styleUrls: ['./test-component3.component.css']
})
export class TestComponent3Component implements OnInit {

  constructor() { }
  currentDate = new Date();
  ngOnInit(): void {
  }

}
