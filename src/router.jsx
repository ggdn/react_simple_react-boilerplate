import React from 'react';
import {render} from 'react-dom';
import Provider from 'react-redux/lib/components/Provider'
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import hashHistory from 'react-router/lib/hashHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import App from './App.jsx';
import Home from './pages/home.jsx';
import AnneeContainer from './component/annee/AnneeContainer.jsx';
import configureStore from './store/configureStore.jsx'

const store = configureStore()

render((
    <Provider store={store}>
        <Router history = { hashHistory }>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "home" component = {Home} />
                <Route path = "annee" component = {AnneeContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
