//objeto literal
//tiene un prototype por defecto, que se define como un objeto
//los objeto son pares de clave: valor

const persona= {
    nombre: 'Tom',
    apellido: 'Smith',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555321321,
        lat: 14.3232,
        lng: 34.4654    
    }
};

console.log( { 
    persona : persona
 } );  //estamos creando un objeto que tiene una propiedad llamada persona

 console.log( { 
    persona
 } ); //otra opcion, es lo mismo 

 console.table (persona);  //podemos mostrarlo como una tabla


 //supongamos que queremos clonar el objeto
 //usariamos
const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona);    //nos toma 'Peter' , lo cual estaria mal
console.log(persona2)    //nos toma 'Peter'

//si queremos hacer una copia del objeto original, sin afectar su contenido, hacemos
const persona3 = {...persona};  //spread operator
persona3.nombre = 'Osvaldo';

console.log(persona);    //nos toma 'Peter' , ahora si esta bien
console.log(persona3)    //nos toma 'Osvaldo'
