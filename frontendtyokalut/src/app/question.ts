export class Question {
    question: string;
    answer: string;

    constructor(question: string) {
        this.question = question;
        this.answer = "Ei vielä arvosteltu";
    }
}
