import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {


  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true);
  
  return (
    <div>
        <h1>Counter <small> <Small value={counter}/> </small> </h1>
        <hr/>

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
