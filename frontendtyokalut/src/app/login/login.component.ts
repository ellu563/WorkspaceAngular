import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; // reititin nappuloita varten
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registrationForm: FormGroup;

  // injektoidaan router komponenttiin, jotta saadaan se käyttöön (näkee reitit) 
  constructor(public router: Router, public authService: AuthService) {
    this.registrationForm = new FormGroup({
      email: new FormControl("elluhaloo@gmail.com", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("Perunaperuna666", [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  login() {
    // eli buttonista mennään admin näkymään
    // this.router.navigate(['admin']);

    this.authService.login(this.registrationForm.value.email, this.registrationForm.value.password);

    /*this.registrationForm.markAsPristine();
    console.log('ei mitaan koha testailen login nappia');
    this.registrationForm.reset();*/
  }

  goBack() {
    // täältä mennään calculator näkymään
    this.router.navigate(['calculator']);
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

}
