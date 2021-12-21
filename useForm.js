import { useState } from "react"

//custom Hook que se encarga de manejar los formularios
export const useForm = (initialState = {}) => { //quiero manjear el estado del formulario
    const [values, setValues] = useState(initialState)

    const reset = () =>{
        setValues(initialState);

    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value

        });   

    }

    return [values, handleInputChange, reset];
}
