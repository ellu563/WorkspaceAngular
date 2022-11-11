export class Question {
    question: string;
    answer: string;

    constructor(question: string) {
        this.question = question;
        this.answer = "Ei vielä arvosteltu";
    }

    setFeedback(value: number) {
        if (value == 0) {
            this.answer = "Ei vielä arvosteltu";
        }
        else if (value == 1) {
            this.answer = "Huono";
        } else if (value == 2) {
            this.answer = "Ok";
        } else if (value == 3) {
            this.answer = "Hyvä";
        }
    }
}
