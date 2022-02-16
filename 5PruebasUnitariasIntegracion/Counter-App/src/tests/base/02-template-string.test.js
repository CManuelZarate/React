import '@testing-library/jest-dom';//incorpora el describe,test y expects

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => { 
    test('getSaludo debe de retornar hola manuel', () => { 
        const nombre = 'Manuel';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( 'Hola '+ nombre + '!' );
     })

     //getSaludo debe retornar Hola Carlos! si no hay argumento en nombre
     test('getSaludo debe retornar hola carlos', () => { 
         
        const saludo = getSaludo();

        expect(saludo).toBe( 'Hola Carlos!' );
      })
 })