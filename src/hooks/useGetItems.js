import { useState, useMemo } from "react"
import { getItems } from "../helpers/getItems";
import { useHistory } from "react-router-dom";

export const useGetItems = (query) => {
    /* Uso del history para cambiar de path */
    const history = useHistory();

    /* Configuro el state inicial del hook */
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /* Uso del useMemo para no llamar el helper en caso que el query tenga el mismo valor y el history debido a que hago dentro del hook */
    useMemo(() => {
        getItems(query).then( items => {

            if (items) {
                setState({
                    data: items,
                    loading: false
                })
            } else {
                history.push('/');
            }

        }).catch( error => {
            history.push('/');
        });
    }, [query,history]);

    return state;
}