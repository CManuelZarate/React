
/* const getImagenPromesa = () => {
    return new Promise( (resolve,reject) => {
        resolve('http')
    } )
} 
getImagenPromesa().then( console.log );
*/
const getImagen = async () => {

    try {
        
        const apiKey = 'VXxsxxPm0tyatahQFHzQLdBuRpTRfLxo';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        
        const {data} =await resp.json();
        const {url} = data.images.original;
        const img =document.createElement('img');
        img.src =url;
        
        document.body.append(img);
        
        console.log(data);
    } catch (error) {
        //error manejar
        console.log(error);
    }

}

getImagen(); // imprimo lo q resuelva




/* const apiKey = 'VXxsxxPm0tyatahQFHzQLdBuRpTRfLxo';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() )//retorna promesa
    .then( ({data}) => {
        const {url} = data.images.original; 
        //console.log(url);

        const img =document.createElement('img');
        img.src = url;

        document.body.append( img );
    } )
    .catch( console.warn ); */