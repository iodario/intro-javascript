

//Arreglos
//Son colecciones de datos que se encuentran en una misma variable

//notacion new Array()
//unicamente usamos esta notacion si queremos usar empty elements
const array = new Array( 100 );  
array.push(1);

console.log(array);

//notacion []
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// console.log( arreglo )

//no es recomendable usar el push
// no vamos a utilizar el push, en su lugar usaremos SPREAD OPERATOR
// utilizamos .map()
let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
