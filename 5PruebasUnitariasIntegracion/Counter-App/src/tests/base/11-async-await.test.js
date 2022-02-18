import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y Fetch', () => { 

    test('debe retorna el url de la img', async () => { 

        const url = await getImagen();
        console.log(url);
        expect( url.includes('https://') ).toBe(true);

     });
 })