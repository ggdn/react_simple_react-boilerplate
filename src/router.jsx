import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import hashHistory from 'react-router/lib/hashHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import Intl from 'intl';
import Index from './Index.jsx';
import Home from './pages/home.jsx';
import Annee from './pages/annee.jsx';
import Bootstrap from './assets/css/bootstrap.min.css';
import Bootstraptheme from './assets/css/bootstrap.min.css';

ReactDOM.render((
    <Router history = { hashHistory }>
        <Route path = "/" component = {Index}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "annee" component = {Annee} />
        </Route>
    </Router>
), document.getElementById('app'));
