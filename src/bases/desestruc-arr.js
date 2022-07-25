//desestructuracion de arreglos
//super tip F2 para renombrar

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);

const [ , ,pedo ] = personajes;
console.log( pedo );


//01
const retornaArreglo = () => {
    return ['ABC', 123];
}
const arr = retornaArreglo();
console.log(arr);

//02
const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);


//Tarea

const State = (valor) => {
    return [ valor, () => {console.log('hola mundo')}];
}


//indexamos rra
const rra = State('Goku');  //rra es un Array , State es una funcion
console.log(rra)           

console.log(rra[0]); //Goku
rra[1]();              //hola mundo

//tarea: realizar lo mismo pero con desestructuracion 
//1. el primer valor del arr se llamara nombre
//2. el segundo valor del arr se llamara setNombre

const [nombre, setNombre] = State('Goku');
console.log(nombre)    //Goku
setNombre();           //hola mundo