import { TestBed } from '@angular/core/testing';

import { ChildServiceService } from './child-service.service';
import { Mock } from 'protractor/built/driverProviders';

describe('ChildServiceService', () => {
  let service: ChildServiceService;
  let mockservice : MockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildServiceService);
    mockservice = new MockService();
  });

  class MockService {
    public ReverseString(str : String){
      return str.split("").reverse().join(""); 
    }

    public ConcatString(str1,str2){
      return str1 +" "+ str2; 
    }
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Revese string',()=>{
    var res = service.ReverseString("Hello");
    expect(res).toBe("olleH");
  })
  
  it('Concat string',()=>{
    var res = service.concatString("Hello","Bratin");
    expect(res).toBe("Hello Bratin");
  })

  it('String reverse using mock', ()=>{
    var result = mockservice.ReverseString("Hello");
    expect(result).toBe("olleH");
  })

  it('String concat using mock', ()=>{
    var result = mockservice.ConcatString("Hello","Bratin");
    expect(result).toBe("Hello Bratin");
  })
});
