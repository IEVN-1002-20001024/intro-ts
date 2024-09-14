import { Punto } from './distancia-entre-dos-puntos'; // Importar la clase Punto

// Clase Triangulo que hereda de Punto
class Triangulo extends Punto {
    private punto1: Punto;
    private punto2: Punto;
    private punto3: Punto;

    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
        super(punto1.getX(), punto1.getY()); // Usar el constructor de la clase Punto con getters
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }

    // Método para verificar si los tres puntos forman un triángulo
    public esTrianguloValido(): boolean {
        const ladoA = this.punto1.calcularDistancia(this.punto2);
        const ladoB = this.punto2.calcularDistancia(this.punto3);
        const ladoC = this.punto3.calcularDistancia(this.punto1);

        // Verificar la desigualdad del triángulo
        return (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);
    }
}


// Crear tres puntos
const punto1 = new Punto(3, 4);
const punto2 = new Punto(7, 1);
const punto3 = new Punto(5, 6);

// Crear un triángulo con los tres puntos
const triangulo = new Triangulo(punto1, punto2, punto3);

// Verificar si los puntos forman un triángulo
if (triangulo.esTrianguloValido()) {
    console.log("Los puntos forman un triángulo.");
} else {
    console.log("Los puntos NO forman un triángulo.");
}



// Crear tres puntos
const punto1 = new Punto(3, 4);
const punto2 = new Punto(7, 1);
const punto3 = new Punto(5, 6);

// Crear un triángulo con los tres puntos
const triangulo = new Triangulo(punto1, punto2, punto3);

// Verificar si los puntos forman un triángulo
if (triangulo.esTrianguloValido()) {
    console.log("Los puntos forman un triángulo.");
} else {
    console.log("Los puntos NO forman un triángulo.");
}
