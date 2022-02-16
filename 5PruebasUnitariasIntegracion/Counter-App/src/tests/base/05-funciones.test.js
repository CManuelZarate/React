import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => {

        const userTest ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        console.log(user);

        expect(user).toEqual( userTest);
    })

    //getUsuarioActivo debe retornar un objeto
    test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = 'juan';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
     })
 }) 