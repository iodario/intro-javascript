
//Desestructuración de Objetos
//Dado un objeto literal
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);   //Tony
console.log(persona.edad);     //45
console.log(persona.clave);    //Ironman


//lo anterior lo cambiamos por esto
const { nombre, edad, clave } = persona;
console.log(nombre);   //Tony
console.log(edad);    //45
console.log(clave);   //Ironman


//Usos de la desestructuracion
//creamos una funcion que hace la desestructuracion
//y luego la invocamos cada vez que requerimos los datos del objeto persona
// const retornaPersona = (usuario) => {
//     const { nombre, edad, clave } = persona;
//     console.log(nombre, edad, clave);
// }
// retornaPersona(persona);


//la desestructuracion la puedo incluir en el mismo argumento
const retornaPersona = ({ nombre, edad, clave }) => {
    console.log(nombre, edad, clave);
}
retornaPersona(persona);


//Otro ejemplo
const persona2 = {
    nombre2: 'Parker',
    edad2: 20,
    clave2: 'Spiderman'
};                                                 //valor por defecto
const retornaPersona2 = ({ nombre2, edad2, clave2, rango = 'Capitan' }) => {
    console.log(nombre2, edad2, clave2, rango);
}
retornaPersona2(persona2);


//Otro ejemplo, Context
const persona3 = {
    nombre3: 'Clark',
    edad3: 35,
    clave3: 'Superman'
};   
const Context = ({ nombre3, edad3, clave3, rango2 = 'Heroe' }) =>{
    // console.log(typeof( edad3))
    return {
        nombreClave: clave3,
        anios: edad3,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}

const {nombreClave, anios, latlng } = Context (persona3);
console.log(nombreClave, anios, latlng)

console.log(Context(persona3))
console.log(typeof( Context))
// console.log(typeof( nombreClave))

//extraer objeto de objeto
// const {latlng:{lat,lng}} = Context(persona3);   //opcion 1
const { lat, lng } = latlng                        //opcion 2, mejor

console.log(lat)
console.log(lng)