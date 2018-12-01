import React, { Component } from "react";
import YouTube from "react-youtube";
import {Grid, IconButton, TextField, Hidden} from "@material-ui/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/App.css";


class About extends Component {
  render() {
    return (
        <div>
            <NavBar pathname={this.props.location.pathname}/>
            <div className="title">About</div>
            <Grid container direction="row">
                <Hidden smDown><Grid item xs={2}></Grid></Hidden>
                <Grid item xs={8}>
                    <div className="subtitle">How do phone scams work?</div>
                    <p>
                        A CRA scam starts with a robocall claiming to be from Canadian Revenue Agency.
                        They tell the recipient that they owe a huge amount in unpaid taxes.
                        Then, the recipient will be informed that they must call back or they will be arrested and put in prison.
                        If the recipien does call back, he or she subjected to further threats and offered a one time offer to settle
                        the matter by paying the money that they “own”.
                    </p>
                    <div className="subtitle">What are we trying to accomplish?</div>
                    <p>
                        We want to prevent fraud from taking place. Specifically protecting those that are vulnerable.
                        By gathering lists of scammers we are able to produce blacklists for telecommunications companies and as well the Authorities.

                    </p>
                    <div className="subtitle">How is this accomplished?</div>
                    <p>
                        We have created an app that warns users about calls and SMS that are suspected to be from a scam number.
                        If a number calls the phone and is not a Contact the application will send the number to a server to check if it is a recognized scam number.
                        If it is a scam number, the app will warn the user with a notification.
                        If a user did not get a warning from the app, but it was a scam number the person can report the number.
                        When a lot of people have reported the same number or it was previously classified, the number will be added to the blacklist.
                    </p>
                    <div className="subtitle">How did we get this idea?</div>
                    <p>
                        We got idea from
                        an <a href="https://www.cbc.ca/news/world/national-cra-india-rcmp-scam-1.4883796">article</a> that
                        was published last month by CBC talking about CRA phone scam.
                    </p>
                    <div className="videoPlayer">
                        <YouTube videoId="9cwcyLvoMps"/>
                    </div>
                </Grid>
                <Hidden smDown><Grid item xs={2}></Grid></Hidden>
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default About;
