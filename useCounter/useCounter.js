import { useState } from "react"

/* Las pruebas que puedo hacer son las siguientes: 
1. Este hooks me retorna un numero y tres funciones, es decir
puedo probar que efectivamente me retorne lo antes mencionado
2. Puedo probar que cada funcion tenga el comportamiento deseado */


export const useCounter = (initialState= 10) => {
    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return{
        counter, //numero
        increment, //funcion
        decrement, //funcion
        reset //funcion
    };
}
