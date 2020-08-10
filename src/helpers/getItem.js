import axios from 'axios';
import URL_API_BASE from '../config/config';

export const getItem = async (id) => {
    /* TryCatch para capturar errores */
    /* Llamo a la url_api_base que viene del config*/
    /* Utilizo el metodo get del paquete axios */
    try {
        const url = `${URL_API_BASE}/items/${id}`;
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        /* Muestro error en caso de haber uno */
        throw new Error(error);
    };
}