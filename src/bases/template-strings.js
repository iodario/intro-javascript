//templates strings
const nombre = 'Dario';
const apellido = 'Turchi';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${ 1 + 1 }
`;

console.log( nombreCompleto );

//funciones

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(` Este es un texto: ${getSaludo(nombre)}`);