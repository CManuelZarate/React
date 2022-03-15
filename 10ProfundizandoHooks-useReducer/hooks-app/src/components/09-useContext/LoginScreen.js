import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  //1. Obtener la ref al userContext
  const {setUser} = useContext(UserContext);
  //2.setUser
  
  const a ={
    id:123,
    name:'manuel'
  }
  
 
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <button className='btn btn-primary'
        onClick={ () => setUser( a ) }>
        Login
      </button>
    </div>
  )
}
