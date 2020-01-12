import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CodeOfConduct from "./pages/codeOfConduct";
import Events from "./pages/events";
import Speakers from "./pages/speakers";
import Schedule from "./pages/schedule";
import * as serviceWorker from './serviceWorker';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { HashRouter, Route, Switch} from 'react-router-dom';
import NavMenu from "./components/navbar";

const routing = (
    <HashRouter>
        <Route path="/" component={NavMenu} />
        <Switch>
            <Route path="/archive" render={() => { window.location.href = "email.html" }} />
            <Route path="/codeofconduct" component={CodeOfConduct} />
            <Route path="/events" component={Events} />
            <Route path="/speakers" component={Speakers} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/" component={App} />
        </Switch>
    </HashRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
