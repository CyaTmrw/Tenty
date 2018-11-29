import React, { Component } from "react";
import axios from "axios";
import {Grid, IconButton, TextField, Hidden} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Header from "../components/Header";
import "../App.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "", spam: ""};
  }
  render() {
    let SpamWarning = null;
    if (this.state.spam === false) SpamWarning = (<h1 className="spamWarning">Not a Spam Number</h1>);
    if (this.state.spam === true) {
        SpamWarning = (
            <div className="spamWarning">
                <img src={require('../images/warning.png')} className="spamWarningIcon" alt="Spam" />
                <div className="spamWarningText">Spam Warning !!!</div>
            </div>
        );
    }

    return (
        <div>
            <Header pathname={this.props.location.pathname}/>
            <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: 400}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <img src={require('../images/logo.png')} className="bigLogoImage" alt="Logo" />
                    <h1 className="bigBrandName">T E N T Y</h1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <input value={this.state.value} className="searchInput"
                    onChange={(event) => this.setState({value: event.target.value})}
                    onKeyPress={(e) => {if (e.key === 'Enter') this.search()}}
                    placeholder="Search" autoFocus={true} />
                    <Hidden xsDown>
                        <IconButton aria-label="Search" onClick={() => this.search()}>
                            <SearchIcon style={{fontSize: 40}}/>
                        </IconButton>
                    </Hidden>
                </Grid>
            </Grid>
                <div>

                </div>
                {SpamWarning}

        </div>
    );
  }
  search() {
        let number = this.state.value.replace(/[^0-9]/g, "");
        if (number.length == 10 || number.length == 11) {
            axios.get("https://tentyapp.com/api/v1/exist/" + number).then((response) => {
                console.log(response.data);
                if (response.data.spam == true) this.setState({spam: true});
                else this.setState({spam: false});
            });
        }
    }
}

export default Home;
