export class Punto {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public calcularDistancia(otroPunto: Punto): number {
        //  d = √((x2 - x1)^2 + (y2 - y1)^2)
        const distanciaX = otroPunto.x - this.x;
        const distanciaY = otroPunto.y - this.y;
        return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    }
}

const punto1 = new Punto(3, 4);
const punto2 = new Punto(7, 1);

const distancia = punto1.calcularDistancia(punto2);

console.log(`La distancia entre los puntos es: ${distancia}`);
