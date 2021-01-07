import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent4Component } from './test-component4.component';

describe('TestComponent4Component', () => {
  let component: TestComponent4Component;
  let fixture: ComponentFixture<TestComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment value', () => {
    fixture = TestBed.createComponent(TestComponent4Component);
    const button = fixture.debugElement.nativeElement.querySelector('.button-inc');

    button.click();
    button.click();
    component.increment();

    expect(component.initialValue).toEqual(2);
  });

  it('should increment value by +2', () => {
    fixture = TestBed.createComponent(TestComponent4Component);
    const button = fixture.debugElement.nativeElement.querySelector('.button-inc');

    button.click();
    button.click();
    component.increment();

    expect(component.initialValue).toEqual(2);
  });
  
});
