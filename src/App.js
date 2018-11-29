import React, { Component } from "react";
import { Router, Route, browserHistory} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </Router>
        );
    }
}

export default App;
