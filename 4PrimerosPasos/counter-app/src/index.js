import React from 'react';
import  ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

//const saludo = <h1>Hola Mundo</h1>;//lo q hace es asignarle aldocum.cretae mucho cod js,JSX necesita reac

const divRoot = document.querySelector('#root');

//ReactDOM.render( <PrimeraApp saludo="Hola mundo"/> , divRoot );
ReactDOM.render( <CounterApp value={22} /> , divRoot );