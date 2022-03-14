
const initialSstate = [ {//establezco el estadoinicial
    id: 1,
    todo:'Comprar leche ', //tarea por hacer
    donce: false//esta terminada ?
}];

const todoReducer = ( state = initialSstate, action) => {//action modifica elstate

    if( action?.type === 'agregar'){
        return [...state,action.payload];//este obj sera el nuevo state simepre es arr
    }

    return state;//regreso algo,siempre reg un state
}

let todos = todoReducer();

//supongamos q quiero añadir elmto a esos todos todos.push()  modifica el state, talvez funcionaria pero cuando estemos con el useReducer,redux o otras maneras de maenjo eso no funcion ,,NOUSAR PUSH

const newTodo = {
    id: 2,
    todo:'Comprar pan ',
    donce: false
}

//lo tengo q manda de alguna manera al reducer mediante la accion,xq el todoreducer es donde yo necesito hacer algo para modificar el state

const agregarTodoAction = { 
    type: 'agregar',//standar
    payload:newTodo //es6 forma corta newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);