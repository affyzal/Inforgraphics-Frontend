import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';
import {Grid} from "@material-ui/core";
import Content from "./Content";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default function ButtonAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} component={Link}   to="/sentiment">Sentiment Analysis</MenuItem>
                            <MenuItem onClick={handleClose} component={Link}   to="/sentence">Sentence Analysis</MenuItem>
                            <MenuItem onClick={handleClose} component={Link}   to="/word">WordAnalysis</MenuItem>
                            <MenuItem onClick={handleClose} component={Link}   to="/heatmaps">HeatMaps</MenuItem>

                        </Menu>
                    </div>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="flex-start">
                        <Typography variant="h6" >
                            Argumentation and Analysis Based Infographics concerning the Presidential Debates
                        </Typography>
                    </Grid>
                    <Link to="/">
                            <HomeIcon fontSize="large" />
                        </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
