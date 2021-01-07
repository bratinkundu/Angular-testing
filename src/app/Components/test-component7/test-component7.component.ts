import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/Services/sample.service';
import { resolve } from 'dns';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-test-component7',
  templateUrl: './test-component7.component.html',
  styleUrls: ['./test-component7.component.css']
})
export class TestComponent7Component implements OnInit {

  constructor(private sampleService : SampleService) { }
  myQuote : string;
  pageTitle : any;
  countValue : any;
  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(){
    new Promise(resolve => {
      resolve("TestComponent7");
    }).then((value)=>{
      this.pageTitle = value;
    })
    
  }

  incrementCounter(){
    this.countValue = this.sampleService.incrementCounter();
  }

  getMyQuote(){
    this.sampleService.getMyQuote().then((quote)=>{
      this.myQuote = quote;
    })
  }

  reverseString(myString, callback){
    setTimeout(()=>{
      var result = myString.split("").reverse().join("");
      callback(result);
    },2000)
  }

}
