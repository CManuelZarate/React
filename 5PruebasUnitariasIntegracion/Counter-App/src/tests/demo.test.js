

describe('Pruebas en el archivo demo.test.js',  () => {
    
    test( "deben ser iguales los strings" , () =>{
    
        //1.inicializacion
        const mensaje = 'Hola mundo';
        
        //2. estimulo
        const mensaje2 = `Hola mundo`;
    
        //3. observar comportamiento
        expect( mensaje ).toBe( mensaje2 );//===
    })
})
