import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from "../../hooks/useFetch"


describe('Pruebas en useFetch', () => { 

  test('debe de retornar la informacion por defecto', () => { 

    const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
    //valores x defecto , ademas se ejecuta antes de traer la data
    const { data, loading, error } = result.current;
    expect( data ).toBe(null);
    expect( loading ).toBe(true);
    expect( error ).toBe(null);
   });

   //esperar el result del use fetch
  test('debe de tener la info deseada,load:false;err;fal', async() => { 
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );//el wait..regresa promesa ,uso func asynv
    await waitForNextUpdate();
  
    const { data, loading, error } = result.current;

    expect( data.length ).toBe(1);//obj con cosas
    expect( loading ).toBe(false);
    expect( error ).toBe(null);
   })

   test('debe de manejar el error', async() => { 
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') );//el wait..regresa promesa ,uso func asynv
    await waitForNextUpdate();
  
    const { data, loading, error } = result.current;

    expect( data ).toBe(null);//obj con cosas
    expect( loading ).toBe(false);
    expect( error ).toBe('No se pudo cargar la info');
   })

 })