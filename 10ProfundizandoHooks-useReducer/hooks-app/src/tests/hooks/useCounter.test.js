import {renderHook, act} from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en useCounter', () => { 
  test('debe de retornar valores por defecto', () => { 
    //renderizamos el hook,recibe callba yuseCOun"evaluar"
    const { result } =renderHook( ()=> useCounter() );

    expect(result.current.counter).toBe(10);
    expect( typeof result.current.increment).toBe('function');
    expect( typeof result.current.decrement).toBe('function');
    expect( typeof result.current.reset).toBe('function');

   });

   test('debe de tener el counter en 100', () => { 
    const { result } =renderHook( ()=> useCounter(100) );
    expect(result.current.counter).toBe(100);
  });
  
  
  test('debe de incrementar el counter en 1', () => { 
    //prefiero no en el defaulteach,yo ocupo func q se aplican cuando se ejecuta el useC x ello dejo la inst aca.
    const { result } =renderHook( ()=> useCounter(100) );
    const { increment } = result.current;
    
    //act para poder hacer accion de las funciones en el hook,se importa del testing
    act( () => {
      increment();
    });  

    const { counter } =result.current;
    expect( counter ).toBe(101);
  });
  test('debe de decrementar el counter en 1', () => { 

    const { result } =renderHook( ()=> useCounter(100) );
    const { decrement } = result.current;
    
    act( () => {
      decrement();
    });  

    const { counter } =result.current;
    expect( counter ).toBe(99);
  });

  test('debe de resetear el counter su val original', () => { 

    const { result } =renderHook( ()=> useCounter(100) );
    const { increment,reset } = result.current;
    
    act( () => {
      increment();
      reset();
    });  

    const { counter } =result.current;
    expect( counter ).toBe(100);
  });
  
 })