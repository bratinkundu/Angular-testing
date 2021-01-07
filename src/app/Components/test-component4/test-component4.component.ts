import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component4',
  templateUrl: './test-component4.component.html',
  styleUrls: ['./test-component4.component.css']
})
export class TestComponent4Component implements OnInit {
  public initialValue : number = 0;
  constructor() { }
  
  ngOnInit(): void {
  }

  increment(){
    this.initialValue++;
    return this.initialValue++;
  }
}
