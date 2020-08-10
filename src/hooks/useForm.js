import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    /* State del hook */
    const [values, setValues] = useState(initialState);

    /* En caso de resetar el formulario */
    const reset = () => {
        setValues( initialState );
    }

    /* Handle para guardar el valor en state */
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    /* Para utlizar en el componente */
    return [ values, handleInputChange, reset ];

}
