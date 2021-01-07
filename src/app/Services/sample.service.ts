import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  myQuote = 'It is my component';
  counter = 0;
  constructor() { }

  incrementCounter(){
    setTimeout(() => {
      this.counter = this.counter + 1;
      return this.counter;
    }, 2000);
  }

  getMyQuote(){
    return new Promise<string>((resolve,reject) => {
      resolve(this.myQuote);
    })
  }
}
