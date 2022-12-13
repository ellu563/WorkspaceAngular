export class Buyer {
    firstName: string;
    lastName: string;
    email: string;

    result: number = 0;
    studentresult: number = 0;
    seniorresult: number = 0;

    basicEuro: number = 0;
    studentEuro: number = 0;
    seniorEuro: number = 0;

    finalPrice: number;

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.finalPrice = 0;
    }
}
