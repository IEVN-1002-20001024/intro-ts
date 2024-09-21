export class Distance {
    puntox_1: number;
    puntoy_1: number;
    puntox_2: number;
    puntoy_2: number;

    constructor(puntox_1: number, puntoy_1: number, puntox_2: number, puntoy_2: number) {
        this.puntox_1 = puntox_1;
        this.puntoy_1 = puntoy_1;
        this.puntox_2 = puntox_2;
        this.puntoy_2 = puntoy_2;
    }

    calculate(): number {
        return Math.sqrt(Math.pow((this.puntox_2 - this.puntox_1), 2) + Math.pow((this.puntoy_2 - this.puntoy_1), 2));
    }
}

 const distance = new Distance(1, 1, 10, 10);
 console.log(distance.calculate());
