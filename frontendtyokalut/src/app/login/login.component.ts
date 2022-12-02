import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Router } from "@angular/router"; // reititin nappuloita varten

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  person: Person;

  constructor(public router: Router) {
    this.person = new Person();
  }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    console.log(e.value.firstName);
  }

  login() {
    // eli buttonista mennään admin näkymään
    this.router.navigate(['admin']);
  }

  goBack() {
    // täältä mennään calculator näkymään
    this.router.navigate(['calculator']);
  }

}
