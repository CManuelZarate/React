//desestructuracion 

//asignacion desestructurante
const p ={
    nombre : 'c',
    edad:45,
    clave:'I'
}

const { edad,nombre:nombre2 } = p;//extraigo:asigno

console.log(nombre2);
console.log(edad);


//destructu en arg
const rPer = ({ clave,nombre , edad , rango="cap" }) =>{
    return {
        nclave : clave,
        anios: edad,
        lat:{
            l:12.1
        }
    }
}

const { nclave:ncl , anios:anio, lat: { l } } = rPer (p);
console.log( ncl , anio, l);
