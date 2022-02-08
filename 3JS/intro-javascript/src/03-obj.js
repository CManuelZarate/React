const persona ={
    nombre : "crl",
    direccion:{
        ciudad:'vmt'
    }
};

console.log({personaaa:persona});//persona propiedad:asignamos valor per
//creamos un obj con prop persona y el valor al q apunta es a mi obj;
console.log({persona});

//const p2 = persona;//ref
const p2 = {...persona};//operador spread

console.log(p2);