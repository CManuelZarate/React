import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {

  const {counter, increment}  =useCounter(1);

  const { data } =useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { quote } = !!data && data[0];//autor del obj directo, si viene la data entonces extrae la data de la pos,,la doble nega transf null en falso
  //console.log(author , quote);
  
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect( ()=> {
    setBoxSize(pTag.current.getBoundingClientRect() );
  }, [quote] )


  return (
    <div>
        <h1>Layout effects !!!!!</h1>
        <hr></hr>

        <blockquote
            className='blockquote text-end'>
            <p className=''
                ref={pTag} > 
                { quote }  
            </p>
        </blockquote>

        <pre>
            { JSON.stringify(boxSize, null,3) }
        </pre>

        <button 
          className='btn btn-primary'
          onClick={ increment }>
          siguiente quote
        </button>

    </div>
  )
}
