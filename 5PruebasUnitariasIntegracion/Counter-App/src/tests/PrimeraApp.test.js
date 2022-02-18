import React from 'react';
import '@testing-library/jest-dom';//para q aparezca la ayuda
import { shallow } from 'enzyme';


//import {render} from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => { 


    /* test('debe mostrar el mensaje "Hola mundo"', () => { 

        const saludo = 'Hola mundo';//msg evaluar

        const {getByText} = render( <PrimeraApp saludo={saludo}/> ) //producto renderizado de lo quiero mostrar,,dessetruturamos el wraper y obtene el get..

        expect( getByText(saludo) ).toBeInTheDocument(); //pregunto si existe el saludo en ese comp

        
     }) */

     test('debe de mostrar el <PrimeApp /> correctamente', () => { 
        const saludo = 'Hola mundo'
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )

        expect( wrapper ).toMatchSnapshot();
      });

      test('debe de mostrar el subtitulo neviado por porps', () => { 

        const saludo = 'Hola mundo';
        const subtitulo = 'soy un subtitulo';
        const wrapper = shallow( 
        <PrimeraApp 
            saludo={saludo} 
            subtitulo={ subtitulo }

        /> );

        const textoParrafo = wrapper.find('p').text();//busco el parrafo, #id
        console.log(textoParrafo);

        expect( textoParrafo ).toBe( subtitulo );
       })

 })