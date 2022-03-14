

export const todoReducer = (state = [], action) => {

    switch ( action.type ) {
        case 'add':
            return [...state,action.payload];
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );//regresa nuevo arr,q cumpla,payload(grupo de nros q tiene cada todo "id")
        case 'toggle':
            return state.map( todo => 
                    ( todo.id === action.payload )
                        ?{...todo, done: !todo.done}
                        : todo
            );
        case 'toggle-old':
            return state.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done//queiro cambiar el done
                    }
                }else{
                    return todo;
                }
            } )//retornamso un nuevo state

    
        default:
            return state;
    }
}