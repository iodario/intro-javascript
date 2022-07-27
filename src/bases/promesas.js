//Promesas
//Se ejecutan en forma asincrona
//Javascript ejecuta primero todo lo SINCRONO
// Y DESPUES LO ASINCRONO


import { getHeroeById } from "./bases/import-export"

// const promise = new Promise((resolve, reject) =>{  //asincrono
//     setTimeout(() =>{
//         console.log('2 segundos despues: ')
//         resolve()
//     }, 2000)
// });

// promise.then(() =>{
//     console.log(' Then de la promesa')
// })
// console.log('first')   //sincrono



//Tarea: 
//Importar heroe.js, y traer el array de heroes , dentro de la promesa


// const promise = new Promise((resolve, reject) =>{  //asincrono

//     setTimeout(() =>{
//       console.log('despues de 2 segundos:');
//       const p1 = getHeroeById(2);
//       resolve(p1)

//     }, 2000)
// });

// promise.then((ok) =>{    //then() va a retornar lo que se paso por resolve
//     console.log('heroe',ok)
// }).catch(()=>{          //catch() va a retornar lo que se paso por reject
//     console.log('error!!!!')
// })

// console.log('first sincrono')   //sincrono


const getHeroeByIdAsync = (id) => {


    return new Promise((resolve, reject) => {  //asincrono

        setTimeout(() => {
            console.log('despues de 2 segundos:');
            const p1 = getHeroeById(id);

            (p1) ?
                resolve(p1)
                :
                reject('no se ha encontrado el id')


        }, 2000)
    });

    // return promise;
}

getHeroeByIdAsync(11)
    .then((ok) => {    //then() va a retornar lo que se paso por resolve
        console.log('heroe', ok)
    })
    .catch( console.warn )  //podemos emplear console.warn, como warning
