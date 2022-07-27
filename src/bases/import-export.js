// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes'
// import  heroes, { owners }  from "../data/heroes";
import  heroes from "../data/heroes";

export const getHeroeById = (id) =>{
    return heroes.find(el => el.id === id );
}
// console.log(getHeroeById(2));

//getHeroeByOwner
// SI USO FIND VA A ENCONTRAR EL PRIMER ELEMENTO QUE CUMPLALA CONDICION
// SI QUIERO ENCONTRAR TODAS LAS COINCIDENCIAS, DEBO USAR FILTER
export const getHeroeByOwner = (owner) =>{
    return heroes.find(el => el.owner === owner)
}
// console.log(getHeroeByOwner( 'DC'))


//filterByOwner
export const filterByOwner = (owner) =>{
    return heroes.filter(el => el.owner === owner)
}
// console.log(filterByOwner( 'DC'))


//utilizo import compuesto default y no default

 





