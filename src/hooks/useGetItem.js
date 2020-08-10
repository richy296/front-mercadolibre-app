import { useState, useMemo } from "react"
import { getItem } from "../helpers/getItem";
import { useHistory } from "react-router-dom";

export const useGetItem = (id) => {
    /* Uso del history para cambiar de path */
    const history = useHistory();

    /* Configuro el state inicial del hook */
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    /* Uso del useMemo para no llamar el helper en caso que el ID tenga el mismo valor y el history debido a que hago dentro del hook */
    useMemo(() => {
        /* Llamo a la API */
        /* Debido a que es una promesa la llamo con el then */
        getItem(id).then( item => {
            if (item) {
                /* Guardo los valores en el state */
                setState({
                    data: item,
                    loading: false
                })
            } else {
                history.push('/');
            }
        }).catch( error => {
            history.push('/');
        });
    }, [id, history]);

    return state;
}