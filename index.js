require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import EmailListContainer from './components/email-list-container';
import App from './components/app';
import EmailContainer from './components/email-container';

const routes = (
    <Router history={hashHistory}>
        <Route path="/mail" component={App}>
            <IndexRoute component={EmailListContainer} />
            <Route path=":MailBoxId" component={EmailContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
