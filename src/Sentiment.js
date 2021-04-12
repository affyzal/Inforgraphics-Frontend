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
import 'fontsource-roboto';


import HomeBar from './HomeBar'
import Content from './Content'
import Trump from './Trump.png'; // with import
import Biden from './Biden.png';
import {Link} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

import Subjectivites from './img/Subjectivities.png'
import Polarities from './img/Polarities.png'
import SentimentOverall from './img/Sentiment.png'



const Sentiment = () => {
    document.body.style.backgroundColor = "Black";
    return (
        <div>
            <div>
                <Grid container direction="column">
                    <Grid item><HomeBar /></Grid>
                </Grid>
                <Typography variant="h3" color="secondary" align="center">
                    Sentiment Analysis of the Debates
                </Typography>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={Subjectivites} />
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                        </Typography>
                    </Grid>
                </Grid>
                <div align="center">
                    <Link to="/">
                        <Button variant="contained" color="secondary">
                            A Closer Look Into the Graph
                        </Button>
                    </Link>
                </div>
                <p></p>
                <p></p>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={Polarities} />
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                        </Typography>
                    </Grid>
                </Grid>
                <div align="center">
                    <Link to="/">
                        <Button variant="contained" color="secondary">
                            A Closer Look Into the Graph
                        </Button>
                    </Link>
                </div>
                <p></p>
                <p></p>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={SentimentOverall} />
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                            GRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARYGRAPH COMMENTARY
                        </Typography>
                    </Grid>
                </Grid>
                <div align="center">
                    <Link to="/">
                        <Button variant="contained" color="secondary">
                            A Closer Look Into the Graph
                        </Button>
                    </Link>
                </div>
                <p></p>
                <p></p>
            </div>
        </div>


    );
};

export default Sentiment;
