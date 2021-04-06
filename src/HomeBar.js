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

export default function ButtonAppBar() {

    return (
        <div>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="flex-start">
                        <Grid item container>
                            <Grid item xs={11}>
                                <Typography variant="h6" >
                                    Argumentation and Analysis Based Infographics concerning the Presidential Debates
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <HomeIcon fontSize="large" />
                            </Grid><
                        /Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
