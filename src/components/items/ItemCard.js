import React from 'react'
import { useHistory } from 'react-router-dom';
import LogoFreeShipping from '../../assets/img/ic_shipping.png';
import PropTypes from 'prop-types';

export const ItemCard = ({item}) => {
    /* Uso del history de router para cambiar de path */
    const history = useHistory();
    /* Muestro el diseño de cada producto */
    /* Valido si free_shipping es true para mostrar el icono */
    return (
        <article className="card-grid pointer" onClick={() => history.push(`/items/${item.id}`)}>
            <figure>
                <img src={item.picture} title={item.title} alt={item.title}/>
            </figure>
            <div className="item">
                <div className="box-item-detail">
                    <div className="item-detail"> 
                        <span className="item-price">{item.price.price_format}</span>
                        {
                            item.free_shipping && 
                            <figure>
                                <img src={LogoFreeShipping} alt="Free Shipping" title="Free Shipping"/>
                            </figure>
                        }
                    </div>
                    <span>{item.state_name}</span>
                </div>
                <h3>{item.title}</h3>
            </div>
        </article>
    )
}
/* Utilizo Proptypes validar que venga el item por los props */
ItemCard.propTypes = {
    item: PropTypes.object.isRequired
}
