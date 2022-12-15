import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { Buyer } from '../buyer';
import { TicketService } from '../services/ticket.service';

/* Lipunvaraus lomake maatalousnayttelyyn, jossa paivittyy summa.
   Sitä varten tehty: Buyer class.
   Lopullinen tavoite: lähettää lomake servicelle */

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  buyer: Buyer;

  // lippujen hinnat
  basicTicket: number = 16;
  studentTicket: number = 10;
  seniorTicket: number = 8;

  constructor(private ticketService: TicketService) {

    this.buyer = new Buyer();

    this.buyer.firstName;
    this.buyer.lastName;
    this.buyer.email;
    this.buyer.result;
    this.buyer.studentresult;
    this.buyer.seniorresult;
    this.buyer.finalPrice;
  }

  ngOnInit(): void {
  }

  // peruslippu
  addValue(btn: string): void {
    if (btn == '+') {
      this.buyer.result++;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-') {
      this.buyer.result--;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
  }

  // opiskelijalippu
  addValueStudent(btn: string): void {
    if (btn == '+') {
      this.buyer.studentresult++;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-') {
      this.buyer.studentresult--;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);;
    }
  }

  // seniorlippu
  addValueSenior(btn: string): void {
    if (btn == '+') {
      this.buyer.seniorresult++;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);
    }
    else if (btn == '-') {
      this.buyer.seniorresult--;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);;
    }
  }

  // korjattu, huom. vielä ongelma että ottaa kokoajan uudelleen hiiren klikkauksesta
  onChange(ob: MatCheckboxChange) {
    if (ob.checked == true) {
      this.buyer.finalPrice = this.buyer.finalPrice * 0.85;
    }
  }

  // tulostetaan nyt submitista tiedot konsoliin
  onSubmit(e: any) {
    console.log("Lopullinen hinta: " + this.buyer.finalPrice + " €");
    console.log("Etunimi: " + e.value.firstName);
    console.log("Sukunimi: " + e.value.lastName);
    console.log("Sahkopostiosoite: " + e.value.email);
  }

}

