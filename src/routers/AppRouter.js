import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { Search } from '../components/search/Search';
import { ItemsScreen } from '../components/items/ItemsScreen';
import { ItemDetailScreen } from '../components/itemDetail/ItemDetailScreen';
export const AppRouter = () => {
    /* Siempre se mostrará el search */
    /* Con el Switch dependiente de la ruta es mostrará un componente u otro. */
    /* Si no es ninguna de los path, redirecciono a '/' y se mostrará el search solo*/
    return (
        <Router>
            <div>
                <Search />
                <Switch>
                    <Route exact path="/items" component={ItemsScreen} />
                    <Route exact path="/items/:id" component={ItemDetailScreen} />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
