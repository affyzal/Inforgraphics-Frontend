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
import CardContent from "@material-ui/core/CardContent"; // with import
import HeatMap1 from './img/Debate1HeatMap.png'
import HeatMap2 from './img/Debate2HeatMap.png'


const HeatMaps = () => {
    document.body.style.backgroundColor = "White";
    return (
        <div>
            <div>
                <Grid container direction="column">
                    <Grid item><HomeBar /></Grid>
                </Grid>
                <Typography variant="h3" color="secondary" align="center">
                    The Heat of the Discussions with Heatmaps
                </Typography>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={HeatMap1} />
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4" color="secondary" align="center">
                            Debate 1 - HeatMap
                        </Typography>
                        <Typography variant="body2" color="primary" component="p">
                            In the given plots, the darker the colour is at a point, the more times each of the speakers started talking or rather interrupted each other.
                            <p></p>
                            The heat of the conversation at a given point is considered to be normal when the colour is more blue or when one speaker is speaking, the other speakers heat remains
                            blank indicating they are not interrupting or speaking at the same time.
                            <p></p>
                            When looking at both HeatMaps, they both are generally the same. There are up to 3 moments in each debate where the speakers really attack each other in conversation and start
                            firing back and forth while they each speak.
                            <p></p>
                            This happens in the following points and both debates follow this same trend of there being heated moments post-introduction, at the midway point of the debate
                            and at the concluding moments of the debate.
                            <p></p>
                            Between these heated moments the conversation is surprisingly cool across the board in both debates again with there really being maybe 2-3 exchanges of warm moments between
                            the actual heated moments.
                            <p></p>
                            So contrary to popular belief, if you go by the numbers, the debates overall actually weren't that bad as far as interruptions and heat. That narrative was likely made in
                            popular media purely based on the 3 points of contention both debates had but otherwise the debates could be considered to be cool overall.
                        </Typography>
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
                <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                    <Grid item xs={8}>
                        <Typography variant="body2" color="primary" component="p">
                            <img src={HeatMap2} />
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h4" color="secondary" align="center">
                            Debate 2 - HeatMap
                        </Typography>
                        <Typography variant="h5" color="primary" component="p">
                            See HeatMap 1's commentary.
                        </Typography>
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
            </div>
        </div>


    );
};

export default HeatMaps;
