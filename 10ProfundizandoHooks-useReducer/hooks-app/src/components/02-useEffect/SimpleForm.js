import React, { useEffect, useState } from 'react';
import { Message } from './Message';


import './effects.css';

export const SimpleForm = () => {


  const [formState, setFormState] = useState({
      name:'',
      email:''
  });

  const {name , email} = formState;

  useEffect( () => {
      //console.log("Hey");
  }, [] );

  useEffect( () => {
    //console.log("form state cambio");
  }, [formState] );

  useEffect( () => {
    //console.log("email cambio");
  }, [email] );


  const handleInputChange = ({target}) => {
    //console.log(target.name);//elemto cambio
    //console.log(e.target.value);//valor input
    setFormState( {
        ...formState,//desestructuro el form state x si no hay propiedades q esten cambiando
        [target.name] : target.value  // "comptuamos" quiero q el nombre sde esta propiedad sea lo q venga en el obj 
    } )
  }

  return (
    <>
        <h1>use Effect</h1>
        <hr></hr>

        <div className='form-group'>
            <input 
                type="text"
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={ name }
                onChange= { handleInputChange }>
            </input>

        </div>

        <div className='form-group'>
            <input 
                type="text"
                name='email'
                className='form-control'
                placeholder='tuemaiel@gmail.com'
                autoComplete='off'
                value={ email }
                onChange= { handleInputChange }>
            </input>

        </div>

        { (name === '123' ) && <Message /> }
    </>
  )
}
