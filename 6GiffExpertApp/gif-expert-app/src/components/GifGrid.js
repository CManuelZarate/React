//import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  /*

  useEffect ( () => {
    getGifs( category )
      .then( setImages );
  }, [category]); *///recibe fun a ejecutar,2° arg arr de depencias si lo dejamos [] el use efec se dipara 1 vez.

  const { data:images, loading} = useFetchGifs(category);
  console.log(loading);

  //getGifs();
  return (
    <>
    <h3 className='animate__animated animate__fadeInDown'> {category} </h3>

    { loading && <p className='animate__animated animate__flash'>Loading</p> }{/* si es V evalua esto */}

    <div className='card-grid'>
        
        {
            images.map( (img) => (
                <GifGridItem 
                    key={img.id}
                    {...img}
                />
            ) )
        }
        
    </div>
    </>
  )
}
