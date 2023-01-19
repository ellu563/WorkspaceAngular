import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthGuard } from './shared/auth.guard';
import { TicketsComponent } from './tickets/tickets.component';

// reitit laitetaan routes taulukkoon, ja nyt ne ovat myös toolbarissa
const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'tickets', component: TicketsComponent },
  { path: 'loan', component: LoanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
