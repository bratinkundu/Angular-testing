import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent5Component } from './test-component5.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('TestComponent5Component', () => {
  let component: TestComponent5Component;
  let fixture: ComponentFixture<TestComponent5Component>;
  let router : Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent5Component ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent5Component);
    router = TestBed.get(Router);
    spyOn(router,'navigateByUrl');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to home page', ()=>{
    const link = fixture.debugElement.nativeElement.querySelector('.home');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  xit('should redirect to about page', ()=>{
    const link = fixture.debugElement.nativeElement.querySelector('.home');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalledWith('123');
  });
});
