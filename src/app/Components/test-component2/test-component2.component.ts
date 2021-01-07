import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component2',
  templateUrl: './test-component2.component.html',
  styleUrls: ['./test-component2.component.css']
})
export class TestComponent2Component implements OnInit {

  constructor() { }
  displayData;
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
