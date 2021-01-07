import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { TestComponent7Component } from './test-component7.component';
import { By } from '@angular/platform-browser';


describe('TestComponent7Component', () => {
  let component: TestComponent7Component;
  let fixture: ComponentFixture<TestComponent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title TestComponent7',(()=>{
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(value).toEqual('TestComponent7');
    })
  }))

  it('should return reversed string',(done)=>{
    component.reverseString("Hello", (res)=>{
      expect(res).toBe("olleH");
      done();
    })
  })

  it('should return a quote', fakeAsync(()=> {
    fixture.componentInstance.getMyQuote();
    tick();
    fixture.detectChanges();
    var res = fixture.debugElement.nativeElement.querySelector('h2').innerText;
    expect(res).toEqual('It is my component');
  }))

  it('should increment counter',fakeAsync(()=>{
    component.incrementCounter();
    flush();
    fixture.detectChanges();
    var res = fixture.debugElement.nativeElement.querySelector('h3').innerText;
    expect(res).toEqual('');
  }))
});
