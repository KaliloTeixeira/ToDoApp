import React from 'react';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Application from './pages/Application';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/application" component={Application} />
            </Switch>
        </BrowserRouter>
    );
}