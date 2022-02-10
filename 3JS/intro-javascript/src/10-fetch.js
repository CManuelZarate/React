const apiKey = 'VXxsxxPm0tyatahQFHzQLdBuRpTRfLxo';

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
    .catch( console.warn );