import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  questions: Question[] = [new Question('Kysymys 1'), new Question('Kysymys 2'), new Question('Kysymys 3'), new Question('Kysymys 4')];

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: any, q: Question) {
    if (event.value == 0) {
      q.answer = "Ei vielä arvosteltu";
    }
    else if (event.value == 1) {
      q.answer = "Huono";
    } else if (event.value == 2) {
      q.answer = "Ok";
    } else if (event.value == 3) {
      q.answer = "Hyvä";
    }
  }

}
