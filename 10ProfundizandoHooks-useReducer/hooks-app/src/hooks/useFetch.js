import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);//x defecto esta montado cuando se llama ya q se renderiza la 1°vez,mantenga lareferencia cuando el hook esta vivo o el comp esta montado , al cambiar valores de este yo no lanzo renderizacion nuevamente solo mantengo la ref al valor
    const [state, setState] = useState({ data :null, loading: true, error: null });

    useEffect( ()=> {
        return () => {//al desmontar cambio valor,no dispara render,solo mantiene ref
            isMounted.current =false;
        }
    }, [] )

    useEffect( ()=> {


        setState( { data: null, loading: true, error:null } );

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                if(isMounted.current){
                    setState({
                        loading: false,
                        error:null,
                        data
                    });
                }else{
                    console.log("setState no se llamo");
                }

            } )
            .catch( () => {
                setState({
                    data:null,
                    loading:false,
                    error:'No se pudo cargar la info'
                })
            } )
    } ,[url]);

    return state;
}
