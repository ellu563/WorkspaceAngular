import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

/* Template driven form, henkilön tietojen tallentamiseen on tehty Person luokka */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person; // esitellaan luokan Person olio, person muuttujaan

  constructor() {
    this.person = new Person();
  }

  onSubmit(e: any) {
    console.log("etunimi: " + e.value.firstName);
    console.log("sukunimi: " + e.value.lastName);
    console.log("henkilotunnus: " + e.value.id);
    console.log("sahkoposti " + e.value.email);
    console.log("kayttajanimi: " + e.value.userName);
  }

  ngOnInit(): void {
  }

}
