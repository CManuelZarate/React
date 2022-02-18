import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => { 

    test('debe de retornar un heroe por id', () => { 

        const id =1;
        const heroe = getHeroeById(id);

        //console.log(heroe);
        const heroeData =heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );


     });

     test('debe de retornar undefined si heroe no existe', () => { 

        const id =10;
        const heroe = getHeroeById(id);
        //no hace falta el find ,como undefined es primi podemos usar toBe
        expect( heroe ).toBe( undefined );
     });

     test('debe retornar un arreglo con los heroes de DC', () => { 
         const owner = 'DC'
         const emp = getHeroesByOwner(owner);

         const heroesData = emp.filter(h => h.owner === owner);
        expect( emp ).toEqual( heroesData );
         /* expect( emp ).toEqual( [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
            
         ] ); */
      })

    test('debe retornar un arreglo con lo heroes de marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe(2);
     })
 })