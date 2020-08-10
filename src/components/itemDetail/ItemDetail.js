import React from 'react'
import PropTypes from 'prop-types';

export const ItemDetail = ({item}) => {
    /* Muestro la informacion detallada de cada item */
    return (
        <>
            <div className="item-detail">
                <figure>
                    <img src={item.picture} title={item.title} alt={item.title}/>
                </figure>
                <div className="detail">
                    <p className="condition">{item.condition ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</p>
                    <h2 className="title">{item.title}</h2>
                    <p className="price">{item.price.price_format}</p>
                    <button className="pointer">Comprar</button>
                </div>
            </div>
            <div className="item-detail-description">
                <h3>Descripción del producto</h3>
                <p>{item.description}</p>
            </div>
        </>
    )
}

/* Con los propTypes me aseguro que se pase el item por los props */
ItemDetail.propTypes = {
    item: PropTypes.object.isRequired
}
