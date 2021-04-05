import logo from './logo.svg';
import Title from './Title';
import { Button } from '@material-ui/core';
import React, { useState } from "react";
import { Grid } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";

import HomeBar from './HomeBar'
import Content from './Content'

const App = () => {

    return (
    <div className="App">
        <Grid container direction="column">
            <Grid item><HomeBar /></Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>

        <div>
            <Button variant="contained" color="secondary">
                Hello World
            </Button>
            <Typography>YOYOYO</Typography>
        </div>

    </div>


  );
};

export default App;
