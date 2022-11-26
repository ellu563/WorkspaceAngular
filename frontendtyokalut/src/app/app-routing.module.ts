import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

// reitit laitetaan routes taulukkoon, ja nyt ne ovat myös toolbarissa
const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'cinema', component: CinemaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
