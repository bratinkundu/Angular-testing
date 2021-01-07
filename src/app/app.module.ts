import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent1Component } from './Components/test-component1/test-component1.component';
import { TestComponent2Component } from './Components/test-component2/test-component2.component';
import { TestComponent3Component } from './Components/test-component3/test-component3.component';
import { TestComponent4Component } from './Components/test-component4/test-component4.component';
import { TestComponent5Component } from './Components/test-component5/test-component5.component';
import { TestComponent6Component } from './Components/test-component6/test-component6.component';
import { TestComponent7Component } from './Components/test-component7/test-component7.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent1Component,
    TestComponent2Component,
    TestComponent3Component,
    TestComponent4Component,
    TestComponent5Component,
    TestComponent6Component,
    TestComponent7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
