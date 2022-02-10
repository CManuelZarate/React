import { getHeroeById } from "./08-import-exp";


/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        //importa el getherore de 8
        const heroe = getHeroeById(2)
        console.log("el heroes es:",heroe);
        //resolve(heroe);
        //reject( heroe );
        //reject( "no se pudo encontrar el heroe" );
        //console.log('2 segundos despues');
    }, 2000 )
} );


promesa.then( (heroe) => {
    console.log("heroe",heroe);
} )
.catch( err => console.warn( err ) ); */



const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            //importa el getherore de 8
            const heroe = getHeroeById(id)
            if(heroe){
                resolve(heroe);
            }else{
                reject("no se pudo encontrar el heroe");
            }
            //console.log('2 segundos despues');
        }, 2000 )
    } );
}

getHeroeByIdAsync(2)
    //.then ( heroe => console.log('Heroe', heroe) )
    .then ( console.log )
    .catch( err => console.warn(err) )
    //.catch(  console.warn )  //se puede enviarla referencia de la F q ejecute al error