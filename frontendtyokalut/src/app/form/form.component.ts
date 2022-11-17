import { Component, OnInit } from '@angular/core';
import { Person } from '../person';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person;

  constructor() {
    this.person = new Person();
  }

  onSubmit(e: any) {
    console.log(e.value.firstName);
  }

  ngOnInit(): void {
  }

}
