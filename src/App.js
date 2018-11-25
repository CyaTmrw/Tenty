import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "", spam: false};
  }
  render() {
    let SpamWarning;
    if (this.state.spam == false) SpamWarning = (<h1></h1>);
    if (this.state.spam == true) {
        SpamWarning = (
            <div className="spamWarning">
                <img src={require('./images/warning.png')} className="spamWarningIcon" alt="Spam" />
                <div className="spamWarningText">Spam Warning !!!</div>
            </div>
        );
    }
    return (
        <div className="App">
            <Header />
            <div className="content">
                <div className = "inputForm">
                    <input type="number" className="searchInput" placeholder="Search"
                    value={this.state.value} onChange={(event) => this.setState({value: event.target.value})}/>
                    <button className="searchButton" onClick={() => this.search()}>
                        <img src={require('./images/search.png')} className="searchIcon" alt="Search" />
                    </button>
                </div>
                {SpamWarning}
            </div>
        </div>
    );
  }
  search() {
        if (this.state.value.length == 10 || this.state.value.length == 11) {
            axios.get("http://tentyapp.com/api/v1/exist/" + this.state.value).then((response) => {
                console.log(response.data);
                console.log(response.error);
                if (response.data.span == true) this.setState({spam: true});
                else this.setState({spam: false});
            });
        }
    }
}

export default App;
