import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetItem } from '../../hooks/useGetItem';
import { ItemDetail } from './ItemDetail';
import './itemDetail.scss';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';

export const ItemDetailScreen = () => {
    /* Obtengo el parametro ID que viene por la URL */
    let { id } = useParams();

    /* Hook para traer la data y saber si esta cargando o no */
    const {data: {item, categories}, loading} = useGetItem(id);

    /* Muestro el componente de Breadcrumb para mostrar las categorias  */
    /* Valido que traiga datos el item */
    /* Llamo al componente para mostrar la informacion del item */
    return (
        <div className="container">
            <Breadcrumb categories={categories}/>
            <section className="container-item">
                { loading && <p className="">Loading</p>}
                {
                    item &&
                    <ItemDetail item={item}/>
                }
            </section>
        </ div>
    )
}
