import React from 'react';//imp por defecto e independiente
import PropTypes from 'prop-types';

//FC

const PrimeraApp =( { saludo, subtitulo } ) => {
    
    if (!saludo){
        throw new Error ('El saludo es necesario');
    }
    return (
    <>
        <h1> { saludo } </h1>
        <pre>  {/*  JSON.stringify(saludo,null,3) */} </pre>
        <p>{ subtitulo }</p>
    </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtiutlo'
}

export default PrimeraApp;