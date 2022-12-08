import { Injectable } from '@angular/core';

/* huom. Adminia varten */

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Array<any>;

  constructor() {
    this.questions = [{ name: 'Kysymys 1' }, { name: 'Kysymys 2' }, { name: 'Kysymys 3' }, { name: 'Kysymys 4' },];
  }

  getQuestions(): any {
    // palautetaan kysymykset
    return this.questions;
  }
}
