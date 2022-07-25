//funciones mala notacion

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Pedro'));

//funciones correcta notacion, Arrow Function

const saluddar = (nombre) => `Hola, ${nombre}`;

console.log(saluddar('Juan'));

//sin parametros

const saludddar = () => `Hola Mundo`;

console.log(saludddar());

// getUser() , utilizamos parentesis como return

const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getUser();
console.log(user);

//Tarea
//1. Transformar a funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Probar
const getUsuarioActivo = (nombre) =>
({
    uid: 'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
