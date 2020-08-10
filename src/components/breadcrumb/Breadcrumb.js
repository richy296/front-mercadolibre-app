import React from 'react'
import PropTypes from 'prop-types';
import './breadcrumb.scss';

export const Breadcrumb = ({categories}) => {
    let ultimoElemento;

    /* Me aseguro que los categories tengan datos */
    if (categories) {
        /* Guardo el ultimo valor del arreglo */
        ultimoElemento  = categories[categories.length - 1];
        /* Elimino el ultimo valor del arreglo */
        categories.pop();
    }

    /* Muestro las categorias sin el ultimo valor */
    /* Muestra el ultimo valor personalizado */
    return (
        <>
            {
                categories &&
                <p className="breadcrumb"> 
                    {categories.map(category => {
                        return category + ' > ';
                    })} 
                    <span>{ultimoElemento}</span>
                </p>   
            }
        </>
    )
}

/* Me aseguro que venga las categorias del tipo array */
Breadcrumb.propTypes = {
    categories: PropTypes.array
}
