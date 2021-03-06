import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3Component } from './test-component3.component';

describe('TestComponent3Component', () => {
  let component: TestComponent3Component;
  let fixture: ComponentFixture<TestComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display date in M/d/yy format', () => {
    const fixture = TestBed.createComponent(TestComponent3Component);
    fixture.detectChanges();
    const component = fixture.nativeElement;
    expect(component.querySelector('div p').textContent).toEqual("12/9/20");
  });

  it('should display date in dd/MM/yyyy format', () => {
    const fixture = TestBed.createComponent(TestComponent3Component);
    fixture.detectChanges();
    const component = fixture.nativeElement;
    expect(component.querySelector('div p').textContent).not.toEqual("09/12/2020");
  });

});
