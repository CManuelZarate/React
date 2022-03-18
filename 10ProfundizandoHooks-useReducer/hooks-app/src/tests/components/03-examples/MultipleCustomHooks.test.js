import React from 'react';//ocupo un snap
import { shallow } from "enzyme";
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';


describe('Pruebas en <MultipleCustomHooks/>', () => { 

  test('debe de mostrarse correctamente', () => { 

    const wrapper = shallow( <MultipleCustomHooks/> );
    expect(wrapper).toMatchSnapshot();
   })


 })