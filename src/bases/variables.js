
//Variable y Constantes

//const variable que no cambia su valor.
//let variable que puede reasignarse , dentro del scope.

const nombre = 'Dario';
let apellido = 'Turchi';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//scope
if ( true ) {
    let valorDado = 6 ;
     console.log(valorDado);    //variable local, dentro del if
}

console.log(valorDado);        //variable global


