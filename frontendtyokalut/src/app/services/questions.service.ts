import { Injectable } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

/* huom. Adminia varten */

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: PeriodicElement[] = [
    { position: 1, name: 'Kysymys 1' },
    { position: 2, name: 'Kysymys 2' },
    { position: 3, name: 'Kysymys 3' }
  ];

  constructor() {
    this.questions;
  }

  getQuestions(): any {
    // palautetaan kysymykset
    return this.questions;
  }
}
