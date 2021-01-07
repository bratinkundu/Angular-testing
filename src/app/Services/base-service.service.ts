import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor() { }

  returnReverseStr(myString : String){
    return myString.split("").reverse().join("");
  }

  concatStrings(str1: String, str2: String){
    return str1 +" "+ str2;
  }
}
