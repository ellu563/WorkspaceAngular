import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from './services/feedback.service';
import { CinemaComponent } from './cinema/cinema.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NewsFilterPipe } from './pipes/news-filter.pipe';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { TicketsComponent } from './tickets/tickets.component';
import { LoanComponent } from './loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    HelloworldComponent,
    ToolbarComponent,
    FormComponent,
    ReactiveFormComponent,
    CinemaComponent,
    NewsFilterPipe,
    LoginComponent,
    AdminComponent,
    TicketsComponent,
    LoanComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase') as
    ModuleWithProviders<AngularFireModule>,
    AngularFireAuthModule,
    MatTableModule
  ],
  providers: [FeedbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
