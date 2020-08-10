import React from 'react'
import { ItemList } from './ItemList'
import './items.scss';

export const ItemsScreen = () => {
    /* Componente que contiene la vista del search */
    return (
        <div className="container">
            <ItemList />
        </div>
    )
}
