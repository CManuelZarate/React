import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
//import { useForm } from '../../hooks/useForm';

import './styles.css';
//import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];//como puede regresar null retorna []

    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]; */
}

export const TodoApp = () => {



  const [todos,dispatch] = useReducer(todoReducer, [], init);

  //console.log(description);//listado de todos

  useEffect( () => {//si los todos cambia vuelvo a grabar
    localStorage.setItem('todos', JSON.stringify( todos ))
  },[todos] );

  const handleDelete = ( todoId ) => {
      console.log(todoId);

      //tarea llamar a la funcion y al case y me regrese el estado de los todos sin el q yo quiero eliminar.
      //-recibir el todoId , crear la accion ,hacer dispatch
      //eso dispararia todo y actualia todos el listado se graba automa localstorage

    const action = {
    type: 'delete',
    payload: todoId
    }
    dispatch(action);
  }

  const handleToggle = ( todoId) => {
    dispatch({
        type:'toggle',
        payload: todoId
    })
  }

  const handleAddTodo = (newTodo) => {

    dispatch({
        type:'add',
        payload: newTodo
    });
  }


  //el init 3er es usado como Func para inicializar el state en caso de q el state sea como procesado o haga varias acciones ya qsi lo ponen aca  cada vez q el comp se redibuje al se r una fucn externa al comp lo hace + ligero y rapido inclusive se puede memorizar result.
  //dispathc: ayuda a disparar las acciones hacia mi reducer,hace varia cosas pero al trabajr con ese dispatch y hacemos cambios en el state react se entere si hubo cambio para redibujarlo en pantalla 
  return (
    <div>
        <h1>TodoApp ({todos.length})  </h1>
        <hr/>

        <div className='row'>
            <div className='col-7'>
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
            </div>

            <div className='col-5'>
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />
            </div>

        </div>


    </div>
  )
}
