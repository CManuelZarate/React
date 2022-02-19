

import React, { useState } from 'react';

import propTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      //console.log(e.target.value);
      setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();//para prevenir el comp por defecto
    console.log("submit hecho");

    if( inputValue.trim().length > 2 ){
        setCategories( c => [...c, inputValue] );
        setInputValue('');
    }

  }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
