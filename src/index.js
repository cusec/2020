import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CodeOfConduct from "./pages/codeOfConduct";
import Events from "./pages/events";
import Speakers from "./pages/speakers";
import Schedule from "./pages/schedule";
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavMenu from "./components/navbar";

const routing = (
    <Router>
        <Route path="/" component={NavMenu} />
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/archive" render={() => { window.location.href = "email.html" }} />
            <Route exact path="/codeofconduct" component={CodeOfConduct} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/speakers" component={Speakers} />
            <Route exact path="/schedule" component={Schedule} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
