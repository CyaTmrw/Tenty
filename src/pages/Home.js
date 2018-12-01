import React, { Component } from "react";
import axios from "axios";
import {Grid, IconButton, TextField, Hidden} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NavBar from "../components/NavBar";
import "../styles/App.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "", scam: null};
  }
  render() {
    let ScamResult = null;
    if (this.state.scam === false) {
        ScamResult = (
            <Grid container direction="column" justify="center" alignItems="center" className="scamResult">
                <div className="scamCleanText">This phone number is clean!</div>
                <div className="scamResultDescription">This phone number IS NOT a scammer's number</div>
            </Grid>
        );
    } else if (this.state.scam === true) {
        ScamResult = (
            <Grid container direction="column" justify="center" alignItems="center" className="scamResult">
                <Grid container direction="row" justify="center" alignItems="center">
                    <img src={require('../images/warning.png')} className="scamWarningIcon" alt="Scam" />
                    <div className="scamWarningText">Scam Warning !!!</div>
                </Grid>
                <div className="scamResultDescription">This phone number IS a scammer's number</div>
            </Grid>
        );
    }

    return (
        <div>
            <NavBar pathname={this.props.location.pathname}/>
            <Grid container direction="column" justify="center" alignItems="center" style={{minHeight: 400}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <img src={require('../images/logo.png')} className="bigLogoImage" alt="Logo" />
                    <h1 className="bigBrandName">T E N T Y</h1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <input value={this.state.value} className="searchInput"
                    onChange={(event) => this.setState({value: event.target.value})}
                    onKeyPress={(event) => {if (event.key === 'Enter') this.search()}}
                    onKeyDown={(event) => {if (event.keyCode === 8) this.setState({scam: null})}}
                    placeholder="Search" autoFocus={true} />
                    <Hidden xsDown>
                        <IconButton aria-label="Search" onClick={() => this.search()}>
                            <SearchIcon style={{fontSize: 40}}/>
                        </IconButton>
                    </Hidden>
                </Grid>
                {ScamResult}
            </Grid>
        </div>
    );
  }
  search() {
        let number = this.state.value.replace(/[^0-9]/g, "");
        if (number.length == 10 || number.length == 11) {
            axios.get("https://tentyapp.com/api/v1/exist/" + number).then((response) => {
                console.log(response.data);
                if (response.data.scam == true) this.setState({scam: true});
                else this.setState({scam: false});
            });
        }
    }
}

export default Home;
