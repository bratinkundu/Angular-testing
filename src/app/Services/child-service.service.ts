import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {

  constructor(private baseService : BaseServiceService) { }

  ReverseString(str : String){
    return this.baseService.returnReverseStr(str);
  }

  concatString(str1,str2){
    return this.baseService.concatStrings(str1,str2);
  }
}
