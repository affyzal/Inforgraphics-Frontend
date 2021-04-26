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

import Count from './img/SentenceCounts.png'
import Analysis from './img/SentenceAnalysis.png'
import Histogram from './img/SentenceHistogram.png'


const Sentence = () => {
    document.body.style.backgroundColor = "White";
    return (
        <div>
            <Grid container direction="column">
                <Grid item><HomeBar /></Grid>
            </Grid>
            <Typography variant="h3" color="secondary" align="center">
                Sentence Analysis of the Debates
            </Typography>
            <p></p>
            <p></p>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                <Grid item xs={8}>
                    <Typography variant="body2" color="primary" component="p">
                        <img src={Analysis} />
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" color="secondary" align="center">
                        Sentence Level Analysis
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        Concerning analysis at the sentence level, there are some observations that can be made. Firstly as far as the length of the debates is concerned,
                        it is seen that the first debate had a lot more spoken sentences from all the speakers, which aligns with the popular narrative that the first debate was more
                        chaotic.
                        <p></p>
                        In terms of the candidates, Trump maintains a considerable lead in terms of sentences spoken across both debates and in turn overall, showing in terms of spoken
                        sentences; Trump dominated the debate.
                        <p></p>
                        Taking a closer look into each debate, it can be observed that although Trump spoke more in both debates, there is an interesting dynamic with the mediator and biden where in the first
                        debate, biden naturally was the 2nd leading speaker whereas it is seen in the 2nd debate that the mediator actually spoke more sentences than Biden in that debate.
                        <p></p>
                        While these graphs are useful for a general observation, this doesnt really reflect the characteristics of the candidates as there is nop specification as to how many words one used in a sentences,
                        shorter sentences like "what?" or "wait" although they count the same as any other sentence, have a different meaning than other as they suggest interruption.
                    </Typography>
                </Grid>
            </Grid>
            <p></p>
            <p></p>
            <Grid container direction="row" justify="space-around" alignItems="flex-start" spacing={0} padding={0}>
                <Grid item xs={8}>
                    <Typography variant="body2" color="primary" component="p">
                        <img src={Histogram} />
                    </Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant="h4" color="secondary" align="center">
                        Sentence Count per Segment
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        Considering the both, clearer observations can be made by classifying the spoken segments by sentence numbers.
                        <p></p>
                        Taking a look at this, it can be observed that Trump again dominates the debates not only in short segments,
                        likely interruptions and interjections but also in longer segments.
                        <p></p>
                        The key difference comparing Biden and Trump is that opposed to Biden, Trump uses a lot more short one sentence responses suggesting he is moer likely
                        to interrupt speakers or simply reply to speakers with shorter answers.
                        <p></p>
                        However considering Trump has more long responses than Biden too, a concrete conclusion can't really be made other than Trump just
                        dominated the conversation in both short and long form answers.
                    </Typography>
                </Grid>
            </Grid>
            <p></p>
            <p></p>
        </div>


    );
};

export default Sentence;
