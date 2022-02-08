const rArr = () => ['asd',123];

const [l,n] = rArr();
console.log(l,n);

// OBS

const UseState = ( valor ) => {
    return [ valor, () => {console.log("hola") } ];
}

const arr = UseState("xd");
console.log(arr);

arr[1](); // estoy retornando este valor y LLAMNADO A LA FUNCION CON LOS PARENTESIS

//1. el primervalor del aee se llamara nombre
//2. se llamara setNombre 

const [nombre , setNombre] = UseState("xd");
console.log(nombre);
setNombre();