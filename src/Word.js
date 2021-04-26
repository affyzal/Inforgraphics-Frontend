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

import BidenWFreq1 from "./img/Debate 1 - Biden Word Frequency.png";
import BidenWFreq2 from "./img/Debate 2 - Biden Word Frequency.png";
import TrumpWFreq1 from "./img/Debate 1 - Trump Word Frequency.png";
import TrumpWFreq2 from "./img/Debate 2 - Trump Word Frequency.png";



const Word = () => {
    document.body.style.backgroundColor = "White";

    return (
        <div>
            <div>
                <Grid container direction="column">
                    <Grid item><HomeBar /></Grid>
                </Grid>
                <Typography variant="h3" color="secondary" align="center">
                    Word Analysis of the Debates
                </Typography>
                <Typography variant="body1" color="primary" align="center">
                    At the word level, there arent too many observations which can be made other than which words each candidate preferred to use naturally in conversation.
                    <p></p>
                    As far as clear
                    conclusions that can be made, it seems Trump is more likely to speak directly to his opposer with more uses of 'you', whereas Biden seems to talk more to the mediator than Trump
                    having more uses of 'he'(referring to Trump).
                    <p></p>
                    By in large both candidates uses the same words just differently. Biden is more varied than Trump in his words usage tending to use words
                    more broadly than Trump
                </Typography>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={BidenWFreq1} height="400" width="700"/>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={BidenWFreq2} height="400" width="700"/>
                        </Typography>
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={TrumpWFreq1} height="400" width="700"/>
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={TrumpWFreq2} height="400" width="700"/>
                        </Typography>
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
            </div>
        </div>

    );
};

export default Word;
