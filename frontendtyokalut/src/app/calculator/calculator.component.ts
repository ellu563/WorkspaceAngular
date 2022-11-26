import { Component, OnInit } from '@angular/core';

/* Laskin */

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: string = "";

  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  constructor() { }

  ngOnInit(): void {
  }

  // laskutoimitus
  addValue(btn: string): void {
    if (btn == '=') {
      try {
        this.result = eval(this.result);
      }
      catch {
        this.result = "ERROR";
      }
    }
    else if (btn == 'C') {
      this.result = "";
    } else {
      this.result = this.result + btn;
    }
  }
}
