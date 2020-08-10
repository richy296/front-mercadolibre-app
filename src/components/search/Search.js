import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/img/Logo_ML.png';
import './search.scss';

export const Search = () => {
    /* Hago uso del history para cambiar de ruta */
    let history = useHistory();
    
    /* Hook personalizado para pasar la variable y tener el componente más limpio */
    const [values, handleInputChange] = useForm({
        searchText: ''
    });

    const { searchText } = values;

    /* Handle para cambiar de path */
    const handleSearch = e => {
        /* Evita la recarga la web */
        e.preventDefault();

        /* Validacion para enviar datos vacios */
        if (searchText.length < 1) return;
        history.push(`/items?q=${searchText}`)
    }
    
    return (
        <header>
            <div className="container">
                <figure>
                    <img 
                        src={Logo} 
                        title="Logo Mercadolibr" 
                        alt="Logo Mercadolibre"/>
                </figure>
                <form className="search" onSubmit={handleSearch}>
                    <input 
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        className=""
                        autoComplete="off"
                        name="searchText"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="pointer"
                    >
                        <i className="ic-search"></i>
                    </button>
                </form>
            </div>
        </header>
    )
}
