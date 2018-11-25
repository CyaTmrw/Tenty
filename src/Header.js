import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import './App.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={require('./images/logo.png')} className="logo" alt="Logo" />
                <h1 className="companyName">T E N T Y</h1>
                <button className="headerHomeButton" onClick={() => this.home()}>Home</button>
                <button className="headerAboutButton" onClick={() => this.about()}>About</button>
                <button className="headerSecurityButton" onClick={() => this.security()}>Security</button>
            </div>
        );
    }
    home(){
        browserHistory.push('/');
    }
    about(){
        browserHistory.push('/about');
    }
    security(){
        browserHistory.push('/security');
    }
}

export default Header;