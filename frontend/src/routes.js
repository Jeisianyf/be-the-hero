import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
/* BrowserRouter --> Necessário para que as rotas funcionem -- Ele fica em volta de tudo
   Route --> Cada uma das rotas
   Switch --> Uma rota ser chamada por vez
*/

import Login from './pages/Login/index'; //não precisa escrever index, ele já é buscado por padrão --- chamando a rota principal
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCases from './pages/NewCases';

export default function Routes() { //Nossas rotas viram um componente
    return( // exact --> O caminho tem que ser exatamente aquele para ir para ele, pois o 1a '/' vai ter em todas as outras rotas então tem que ser exato
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/> 
                <Route path='/register' component={Register}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/cases/new' component={NewCases}/>

            </Switch>
        </BrowserRouter>
    );
}
