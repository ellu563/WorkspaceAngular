import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { FeedbackService } from '../services/feedback.service';

/* Feedback-kysely/Palautesivu, jossa voi valita slideristä haluamansa valinnan esim: hyvä, ok, huono
   tehty sitä varten Question luokka, ja feedback service */

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  questions: Question[];

  // ensin kysymykset esiteltiin vaan tässä, nyt ne on siirretty serviceen 
  // questions: Question[] = [new Question('Kysymys 1'), new Question('Kysymys 2'), new Question('Kysymys 3'), new Question('Kysymys 4')];

  // servicen käyttö laitetaan constructoriin
  // questionsit haetaan nyt servicestä
  constructor(service: FeedbackService) {
    this.questions = service.getData();
  }

  ngOnInit(): void {
  }

  onInputChange(event: any, q: Question) {
    /*if (event.value == 0) {
      q.answer = "Ei vielä arvosteltu";
    }
    else if (event.value == 1) {
      q.answer = "Huono";
    } else if (event.value == 2) {
      q.answer = "Ok";
    } else if (event.value == 3) {
      q.answer = "Hyvä";
    }*/
    q.setFeedback(event.value);
  }

}
