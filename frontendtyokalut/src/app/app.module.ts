import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    HelloworldComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
