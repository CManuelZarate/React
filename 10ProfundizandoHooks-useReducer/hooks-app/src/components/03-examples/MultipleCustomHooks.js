import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const {counter, increment}  =useCounter(1);

  const { loading,data } =useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];//autor del obj directo, si viene la data entonces extrae la data de la pos,,la doble nega transf null en falso
  console.log(author , quote);
  
  return (
    <div>
        <h1>BreakingBad Hooks !!!!!</h1>
        <hr></hr>

        {
          loading
          ?
            (
              <div
                className='alert alert-info text-center'>
                  loading...
              </div>
            )
          :
            (

            <blockquote
              className='blockquote text-end'>
                <p className=''> { quote }  </p>
                <footer className='blockquote-footer'> {author} </footer>
            </blockquote>
            )
        }

        <button 
          className='btn btn-primary'
          onClick={ increment }>
          siguiente quote
        </button>

    </div>
  )
}
