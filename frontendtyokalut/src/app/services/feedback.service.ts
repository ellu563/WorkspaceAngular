import { Injectable } from '@angular/core';
import { Question } from '../question';

// serviceä voi käyttää esim. rajapintadatan hakemiseen/hakea dataa palvelimelta, voidaan yhdistään esim. backend
// komponentit voi käyttää tätä serviceä, se injektoidaan komponentin constructoriin
// huom. moni eri komponentti voi käyttää sitä samaa serviceä, tällöin kun serviceä päivitetään niin
// se päivittyy kaikkiin komponentteihin jotka hakenut sen

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  questions: Array<Question>;

  constructor() {
    console.log("toimiiko");
    this.questions = [new Question('Kysymys 1'), new Question('Kysymys 2'), new Question('Kysymys 3'), new Question('Kysymys 4')];
  }

  getData(): any {
    return this.questions;
  }
}
