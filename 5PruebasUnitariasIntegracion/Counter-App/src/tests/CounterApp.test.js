import React from 'react';
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";


describe('pruebas en el counter', () => { 
    
    let wrapper = shallow(<CounterApp />); //wraper alto nivel

    beforeEach( () => {//ejecuta antes de cada test
        wrapper = shallow(<CounterApp />);
    } );


    test('debe mostrar counterapp correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe mostrar el valor por defecto de 100', () => { 
        
        const wrapper = shallow(<CounterApp value={100}/>);
        
        const counterText = wrapper.find('h2').text().trim();//trim espblancosborra
        //console.log(counterText);
        expect( counterText ).toBe('100');
    });
    
    test('debe incrementar con el btn +1', () => { 
        
        const btn1 =wrapper.find('button').at(0).simulate('click');//el primero
        //console.log(btn1.html());
        
        const counterText = wrapper.find('h2').text().trim();
        console.log("el wra ",counterText);
        expect( counterText ).toBe('23');
    })
    
    test('debe decrementar con el btn -1', () => { 
        
        const btn1 =wrapper.find('button').at(2).simulate('click');//el primero
        //console.log(btn1.html());
        
        const counterText = wrapper.find('h2').text().trim();
        console.log("el wra ",counterText);
        expect( counterText ).toBe('21');
    })
    
    
    test('debe de colocar el valor x defecto con el btn reset', () => { 
        const wrapper = shallow(<CounterApp value={105} />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        console.log(counterText);

        expect( counterText ).toBe('105');
        
        
        
    })
 })