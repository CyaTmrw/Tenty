import React, { Component } from "react";
import { browserHistory } from "react-router";
import {IconButton, Drawer, Hidden, List, ListItem, Button, Grid} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/QuestionAnswer";
import "../styles/App.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {toggle: false};
    }
    render() {
        let logoAndBrandName;
        if (this.props.pathname != "/") {
            logoAndBrandName = (
                <div className="logoAndBrandName">
                    <img src={require('../images/logo.png')} className="smallLogoImage" alt="Logo" />
                    <h1 className="smallBrandName">T E N T Y</h1>
                </div>
            );
        }
        return (
            <div className="navBar">
                <Drawer anchor="right" open={this.state.toggle} onClose={() => this.toggle(false)}>
                    <div tabIndex={0} role="button" onClose={() => this.toggle(false)}
                        onKeyDown={() => this.toggle(false)}>
                        <List>
                            <ListItem button onClick={() => this.home()}>
                                <HomeIcon style={{ fontSize: 50 }}/>
                                <div className="drawerItemText" >Home</div>
                            </ListItem>
                            <ListItem button onClick={() => this.about()}>
                                <AboutIcon style={{ fontSize: 50 }}/>
                                <div className="drawerItemText">About</div>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <Grid container>
                    <Grid item xs={8}>
                        {logoAndBrandName}
                    </Grid>
                    <Grid item xs={4} dir="rtl">
                        <Hidden xsDown>
                            <div className="navBarButtonContainer">
                                <button className="navBarButton" onClick={() => this.home()}>Home</button>
                                <button className="navBarButton" onClick={() => this.about()}>About</button>
                            </div>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton aria-label="Search" onClick={() => this.toggle()}>
                                <MenuIcon style={{ fontSize: 40 }}/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
        );
    }
    toggle (boolean) {
        if (boolean === undefined) this.setState({ toggle: !this.state.toggle});
        else this.setState({ toggle: boolean});
    };
    home(){
        browserHistory.push('/');
    }
    about(){
        browserHistory.push('/about');
    }
}

export default NavBar;