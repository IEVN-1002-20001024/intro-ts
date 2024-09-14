class Punto {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }


    distancia(p: Punto): number {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    imprimir() {
        console.log(`Puntos: (${this.x}, ${this.y})`);
    }
}

const punto1 = new Punto(1, 2);
const punto2 = new Punto(4, 6);

punto1.imprimir();
punto2.imprimir();

const distancia2D = punto1.distancia(punto2);
console.log(`Distancia de los puntos: ${distancia2D}`);
