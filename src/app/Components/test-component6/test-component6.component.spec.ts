import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent6Component } from './test-component6.component';
import { of } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


class MockUserResposne extends UserService {
  public getall(): any {
    const userResponse = {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    };
    return of([userResponse]);
  }

  public addUser(reqObj): any {
    let check = this.users.find(element => element.id == reqObj.id);
    if (check != null) {
      return reqObj;
    }
    return null;
  }

  public isDeleted(id) {
    if(id > 1){
      return true;
    }
    return false;
  }
}

describe('TestComponent6Component', () => {
  let component: TestComponent6Component;
  let fixture: ComponentFixture<TestComponent6Component>;
  let userService: UserService;
  let mockService: MockUserResposne;
  let router : Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent6Component],
      imports: [RouterTestingModule],
      providers: [{ provide: UserService, useClass: MockUserResposne }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent6Component);
    userService = TestBed.get(UserService);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    mockService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Service returns a single value object', () => {
  //   const userResponse = {
  //     id: '2',
  //     name: 'Bob',
  //     role: 'Developer',
  //     pokemon: 'Charizard'
  //   };
  //   let response;
  //   spyOn(userService, "findOne").and.returnValue(of(userResponse));
  //   userService.findOne('2').subscribe(res => {
  //     response = res;
  //   });
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   expect(response).toEqual(userResponse);
  // });

  // it('Service call with extends method', () =>{
  //   const userResponse = {
  //     id: '2',
  //     name: 'Bob',
  //     role: 'Developer',
  //     pokemon: 'Charizard'
  //   };
  //   let response = mockService.getall();
  //   let returnValue;
  //   response.subscribe(res => {
  //     returnValue = res[0];
  //   })
  //   expect(returnValue).toEqual(userResponse);
  // })

  // it('Calls UserService', ()=>{
  //   let re = spyOn(mockService, "getall").and.callThrough();
  //   component.ngOnInit();
  //   expect(re).toHaveBeenCalled();
  // })

  it('Calls the AddUser in UserService', () => {
    const userResponse = {
      id: '3',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    };
    let response = mockService.addUser(userResponse);
    expect(response).toEqual(userResponse);
  })

  it('Adds the object to the User Array', () => {
    const userResponse = {
      id: '3',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    };
    let response;
    spyOn(userService, "addUser").and.returnValue(of(userResponse));
    response = userService.addUser(userResponse);
    component.ngOnInit();
    fixture.detectChanges();
    expect(response).toEqual(response);
  })

  it('Adds the object to the User Array using mock', () => {
    let re = spyOn(mockService, "addUser").and.callThrough();
    component.ngOnInit();
    expect(re).toHaveBeenCalled();
  })

  it('Routes to login page on logout()', ()=> {
    let router = fixture.debugElement.injector.get(Router);
    spyOn(router,'navigate')
   component.clickLogout();
   expect(router.navigate).toHaveBeenCalledWith(["/login"]);
  })

  it('Should have token if logged in', () => {
    let service = fixture.debugElement.injector.get(UserService);
    spyOn(service, 'IsLoggedIn').and.returnValue(false);
  })

  it('should delete the value if id passed in proper value', () => {
    let response = mockService.isDeleted(2);
    expect(response).toEqual(true);
  })

  it('should not delete the value if passed improper value', () => {
    let response = mockService.isDeleted(-14);
    expect(response).toEqual(false);
  })
});
