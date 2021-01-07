import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2Component } from './test-component2.component';

describe('TestComponent2Component', () => {
  let component: TestComponent2Component;
  let fixture: ComponentFixture<TestComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data in UI', () => {
    const fixture = TestBed.createComponent(TestComponent2Component);
    fixture.detectChanges();
    const component = fixture.nativeElement;
    expect(component.querySelector('div p').textContent).not.toBeNull();
  });

  it('should display only name', () => {
    const fixture = TestBed.createComponent(TestComponent2Component);
    fixture.detectChanges();
    const component = fixture.nativeElement;
    expect(component.querySelector('div p').textContent).toContain("Bratin");
  });
  
});
