import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp= ( {value} ) =>{

    const [counter, setCounter ] = useState(value);
    console.log(counter );

    //handleAdd
    const handleAdd = (e) => {
        //setCounter(counter+ 1);
        setCounter( (c) => c+1 );//puede recibir una F con reotrno el nuevo valor que va tener ese state o counter
    }

    const handleSub = () => {
        setCounter ( (c) => c-1 );
    }

    const reset = () => {
        setCounter ( (c) => c=value );
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter }</h2>

        {/* <button onClick= { (e) => { handleAdd(e) } } >+1</button> */}
        <button onClick= { handleAdd } >+1</button>
        <button onClick= { reset } >Reset</button>
        <button onClick= { handleSub } >-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
