import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Buyer } from '../buyer';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  buyer: Buyer;

  /* VANHA
  buttons: string[] =
    ['+', '-'];

  buttons1: string[] =
    ['+', '-'];

  buttons2: string[] =
    ['+', '-'];
  */

  basicTicket: number = 16;
  studentTicket: number = 10;
  seniorTicket: number = 8;

  // isChecked: boolean = false;

  constructor(private ticketService: TicketService, public router: Router) {

    this.buyer = new Buyer();

    this.buyer.result;
    this.buyer.studentresult;
    this.buyer.seniorresult;
    this.buyer.basicEuro;
    this.buyer.studentEuro;
    this.buyer.seniorEuro;
    this.buyer.finalPrice;
  }

  ngOnInit(): void {
  }

  addValue(btn: string): void {
    if (btn == '+') {
      this.buyer.result = this.buyer.result + 1;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-') {
      this.buyer.result = this.buyer.result - 1;
      this.buyer.finalPrice = this.buyer.result * this.basicTicket + (this.buyer.studentresult * this.studentTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
  }

  addValueStudent(btn: string): void {
    if (btn == '+') {
      this.buyer.studentresult = this.buyer.studentresult + 1;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);
    }
    else if (btn == '-') {
      this.buyer.studentresult = this.buyer.studentresult - 1;
      this.buyer.finalPrice = this.buyer.studentresult * this.studentTicket + (this.buyer.result * this.basicTicket) + (this.buyer.seniorresult * this.seniorTicket);;
    }
  }

  // senior
  addValueSenior(btn: string): void {
    if (btn == '+') {
      this.buyer.seniorresult = this.buyer.seniorresult + 1;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);
    }
    else if (btn == '-') {
      this.buyer.seniorresult = this.buyer.seniorresult - 1;
      this.buyer.finalPrice = this.buyer.seniorresult * this.seniorTicket + (this.buyer.result * this.basicTicket) + (this.buyer.studentresult * this.studentTicket);;
    }
  }

  // korjattu, huom. ongelma että ottaa kokoajan uudelleen hiiren klikkauksesta
  onChange(ob: MatCheckboxChange) {
    if (ob.checked == true) {
      this.buyer.finalPrice = this.buyer.finalPrice * 0.85;
    }
  }

  onSubmit(e: any): Observable<any> {
    return e.value;
  }

}

