import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from "react-router";
import './index.css';
import App from "./App";
import About from "./About";
import Security from "./Security";
import * as serviceWorker from './serviceWorker';

class AppRouter extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/security" component={Security}></Route>
        </Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
