
interface alumno{
    nombre: string;
    apellido:string;
    edad: number;
    curso: string;
    direccion?: string;
}


const alumno:alumno={
    nombre: 'Juan',
    apellido:"lopez",
    edad: 22,
    curso: "ingles"
}

console.table(alumno)

let mascotas=[`perros`,`gatos`,`perico`];

console.log(mascotas[0]);
mascotas[1]=`nuevo gato`;
mascotas.push(`hamster`);
console.log(mascotas);

let tem:(number|string)[]=[]
tem.push(1);
tem.push(`dos`);
console.log(tem)