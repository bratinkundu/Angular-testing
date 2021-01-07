import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component1',
  templateUrl: './test-component1.component.html',
  styleUrls: ['./test-component1.component.css']
})
export class TestComponent1Component implements OnInit {

  constructor() { }

  displayData : any;
  ngOnInit(): void {
    this.displayData = this.setupData();
  }

  setupData() {
    let reqObj = [{
      "Name": "Bratin",
      "Code": "5001",
      "Designation": "SDE"
    },
    {
      "Name": "Person2",
      "Code": "5002",
      "Designation": "SDE"
    },
    {
      "Name": "Person3",
      "Code": "5003",
      "Designation": "SDE"
    }]

    return reqObj;
  }
}
