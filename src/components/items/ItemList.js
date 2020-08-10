import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { ItemCard } from './ItemCard';
import { useGetItems } from '../../hooks/useGetItems';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';

export const ItemList = () => {
    /* Hago uso del location para traer los para de la URL */
    const location = useLocation();
    /* Con el paquete queryString, se facilita el obtener los querys  */
    const {q = ''} = queryString.parse(location.search);

    /* Hook para traer la data y saber si esta cargando o no */
    const {data: {items, categories}, loading} = useGetItems(q);

    /* Muestro el componente de Breadcrumb para mostrar las categorias  */
    /* Valido que traiga datos en los items */
    /* Dentro del items.map le pas el item y el key de cada item */
    return (
        <>
            <Breadcrumb categories={categories}/>
            <section className="card-list">
                { loading && <p className="">Loading</p>}
                { items &&
                    items.map(item => (
                        <ItemCard 
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </section>
        </>
    )
}
