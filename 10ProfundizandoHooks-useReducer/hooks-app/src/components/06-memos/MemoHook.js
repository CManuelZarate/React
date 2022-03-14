import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helper/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {


  const {counter, increment} = useCounter(5000);//veces 5k
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);//callback y luego un input q son las dependencias si algo cambia quiero memorizar el nuevo resultado,,si cambia nencesito una nueva version memorizada de esa funcion
  
  return (
    <div>
        <h1>MemoHook</h1>
        <h3>Counter <small> {counter} </small> </h3>
        <hr/>

        <p> {memoProcesoPesado} </p>

        <button
            className='btn btn-preimary'
            onClick={ increment }>
        +1
        </button>

        <button
            className='btn btn-outline-primary ml-3'
            onClick={ ()=>{
                setShow( !show );
            } }>
            show/hide { JSON.stringify(show) }
        </button>

    </div>
  )
}
