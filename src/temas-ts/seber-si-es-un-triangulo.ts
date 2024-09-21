import { Distance } from './distancia-entre-dos-puntos';

class Triangulo extends Distance {
    private puntox_3: number;
    private puntoy_3: number;

    constructor(puntox_1: number, puntoy_1: number, puntox_2: number, puntoy_2: number, puntox_3: number, puntoy_3: number) {
        super(puntox_1, puntoy_1, puntox_2, puntoy_2);
        this.puntox_3 = puntox_3;
        this.puntoy_3 = puntoy_3;
    }

    public esTriangulo(): boolean {
        const dis1 = this.calculate();
        const dis2 = new Distance(this.puntox_2, this.puntoy_2, this.puntox_3, this.puntoy_3).calculate();
        const dis3 = new Distance(this.puntox_3, this.puntoy_3, this.puntox_1, this.puntoy_1).calculate();

        return (dis1 + dis2 > dis3) && (dis2 + dis3 > dis1) && (dis3 + dis1 > dis2);
    }

    public mostrarResultado(): void {
        if (this.esTriangulo()) {
            console.log('Es un TRIANGULO');
        } else {
            console.log('NO ES UN TRIANGULO');
        }
    }
}


const encajo = new Triangulo(1, 1, 2, 2, 3, 3);
encajo.mostrarResultado();
