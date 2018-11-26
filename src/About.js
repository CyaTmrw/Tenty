import React, { Component } from "react";
import YouTube from "react-youtube";
import Header from "./Header";
import "./App.css";

class About extends Component {
  render() {
    return (
        <div className="About">
            <Header />
            <div className="aboutContent">
                <h1>How do phone scams work?</h1>
                <p>
                    A CRA scam starts with a robocall claiming to be from Canadian Revenue Agency.They tell the recipient that they owe a huge amount in unpaid taxes.
                    Then, the recipient will be informed that they must call back or they will be arrested and put in prison.
                    If the recipien does call back, he or she subjected to further threats and offered a one time offer to settle the matter by paying the money that they “own”.
                </p>
                <h1>What are we trying to accomplish?</h1>
                <p>
                    We want to prevent fraud from taking place. Specifically protecting those that are vulnerable. By gathering lists of scammers we are able to produce blacklists for telecommunications companies and as well the Authorities.
               
                </p>
                <h1>How is this accomplished?</h1>
                <p>
                    We have created an app that warns users about calls and SMS that are suspected to be from a scam number.
                    If a number calls the phone and is not a Contact the application will send the number to a server to check if it is a recognized scam number.
                    If it is a scam number, the app will warn the user with a notification.
                    If a user did not get a warning from the app, but it was a scam number the person can report the number.
                    When a lot of people have reported the same number or it was previously classified, the number will be added to the blacklist.
                </p>
                <h1>How did we get this idea?</h1>
                <p>
                    We got idea from an <a href="https://www.cbc.ca/news/world/national-cra-india-rcmp-scam-1.4883796">article</a> that was published last month by CBC talking about CRA phone scam.
                </p>
                <div className="videoPlayer">
                    <YouTube videoId="9cwcyLvoMps"/>
                </div>
                <h1></h1>

            </div>
        </div>
    );
  }
}

export default About;
