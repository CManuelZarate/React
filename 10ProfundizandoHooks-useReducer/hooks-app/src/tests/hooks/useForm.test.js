import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => { 
  //var para inicializar el formulario
  const initialForm ={
    name:'manuel',
    email:'manuel@gmail.com'
  }

  //al llamar al reset los valores deben ser = al initial

  test('debe regresar un formulario por defecto', () => { 
    //al llamar al form van a compar sus avlues q sean iguales al initial,toEqual, adicional los otros2 deben ser funciones
    const  {result}  = renderHook( () => useForm(initialForm) );//extraigo algo del renderHook
    const [ values,handleInputChange, reset ] = result.current;
    
    expect( values ).toEqual(initialForm);//obj
    expect( typeof handleInputChange ).toBe('function');
    expect( typeof reset ).toBe('function');
   });

   test('debe de cambiar el valor del formulario (cambiar name)', () => { 
     //hay q simular accion "handle input(obj)",al ejecutar deberain tener los mismos val del initi el name cambia

    const  {result}  = renderHook( () => useForm(initialForm) );
    const [ ,handleInputChange ] = result.current;

    act( () => {
      handleInputChange({
        target:{
          name:"name",
          value:'carlos'
        }
      });      
    } );

    const [ formValues ] =result.current;
    console.log(formValues);
    expect( formValues ).toEqual( {...initialForm,name:'carlos'} );

    });

  test('debe de restablecer el formulario con reset', () => { 
    //asegurarse q funcione la prueba ante, tene ejecutar todo lo mismo luego llamar al reset y debe ser como el initial
    const  {result}  = renderHook( () => useForm(initialForm) );
    const [ ,handleInputChange, reset ] = result.current;

    act( () => {
      handleInputChange({
        target:{
          name:"name",
          value:'carlos'
        }
      });
      
      reset();
    } );

    const [ formValues ] =result.current;
    console.log(formValues);
    expect( formValues ).toEqual( initialForm );

   })


 })