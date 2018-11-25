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
                <h1>How does phone scams work?</h1>
                <p>
                    First, CRA scam starts off a robocall claiming to be CRA and telling the recipient that they owe a huge amount of unpaid taxes.
                    Then, the recipient will be informed that they must call back or they will be arrested and put in prison.
                    If the recipien does call back, he or she subjected to further threats and offered a one time offer to settle the matter by paying the money that they “own”.
                </p>
                <h1>What are we trying to accomplish?</h1>
                <p>
                    Stop scammers by making it unsustainable for them to scam people. We want to both warn the user and block scam calls.
                    Eventually, there will be less scammer due to less people will be scammed .
                </p>
                <h1>How would going to accomplish it?</h1>
                <p>
                    We have created an app that warns the users about calls that are suspected to be from scam number.
                    Whenever person receives a call from a scammer, the client will send the number to server to check if it is scam number.
                    If it is a scam number, the app will warn the user with a notification.
                    If a user did not get a warning from the app, the person can report the number.
                    When a lot of people have reported the same number, the number will be added the blacklist.
                    We also records the call and analysis the audio to see if it is a robocall.
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
