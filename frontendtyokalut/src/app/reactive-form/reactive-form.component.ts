import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, CheckboxControlValueAccessor } from '@angular/forms';

/* Reactive form, luodaan FormGroupin avulla, oikeellisuuden tarkistukset ja virheidenkäsittely ts.luokassa */

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]*$")
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[a-zA-Z]*$")
      ]),
      id: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        // regex henkilotunnukselle huom. lisätty kaksi kenoviivaa aina \ viivoihin jotta toimi
        Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([0-9]\\d\+|\\d\\d-|[0-9]\\dA)\\d{3}[\\dA-Z]$")
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{10,}$"),
      ]),
      confirmPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
        // pattern html:ssä
      ]),
      box: new FormControl(false, [
        Validators.requiredTrue
      ])
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registrationForm.markAsPristine();
    console.log('registrationForm.value:' + this.registrationForm.value);
    console.log('registrationForm.value:' + this.registrationForm.value.firstName);
    console.log('registrationForm.valid:' + this.registrationForm.valid);
    this.registrationForm.reset();
  }


  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get id() {
    return this.registrationForm.get('id');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get box() {
    return this.registrationForm.get('box');
  }
}