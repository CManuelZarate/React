import { getHeroeById } from "./08-import-exp";


const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //importa el getherore de 8
        const heroe = getHeroeById(2)
        console.log(heroe);
        //resolve();
        //console.log('2 segundos despues');
    }, 2000 )
} );


promesa.then( () => {
    console.log('then de la promesa');
} )