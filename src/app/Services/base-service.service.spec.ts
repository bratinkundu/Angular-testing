import { TestBed } from '@angular/core/testing';

import { BaseServiceService } from './base-service.service';

describe('BaseServiceService', () => {
  let service: BaseServiceService;
  const demospy = jasmine.createSpyObj('BaseService',['returnReverseStr','concatStrings'])

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return reversed string',() =>{
    var res = service.returnReverseStr("Hello");
    expect(res).toBe("olleH");
  })

  it('shoukd return concated string',() =>{
    var res = service.concatStrings("Hello","Bratin");
    expect(res).toBe("Hello Bratin");
  })

  it('should return reversed string using spyObj',() =>{
    demospy.returnReverseStr("Hello");
    expect(demospy.returnReverseStr).toHaveBeenCalled();
  })
  
  it('should return concated string using spyObj',() =>{
    demospy.concatStrings("Hello","Bratin");
    expect(demospy.concatStrings).toHaveBeenCalled();
  })
});
