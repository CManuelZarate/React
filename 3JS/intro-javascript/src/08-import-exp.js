//import { heroes } from './data/heroes'
//imp + tab
//heroes + tab
import  heroes, { owners }  from "./data/heroes";//por defecto y exportaciones individuales q se encuentran en el archivo, le damos el nombre q querramos

export const getHeroeById = (id) =>{
    return heroes.find( heroe => heroe.id === id);
    /* find recibe un callback, barre cada segmento y extrae heroe hasta encontrar uno q cunple condicion */
}

//console.log( getHeroeById(1) );

export const getHeroesByOwner = ( owner ) =>{
    return heroes.filter( heroe => heroe.owner === owner)
}
//Filter:crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
//console.log( getHeroesByOwner('DC') );
console.log(owners);
