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
                        <Typography variant="h4" color="secondary" align="center">
                            Subjectivity Analysis
                        </Typography>
                        <Typography variant="body2" color="primary" component="p">
                            Subjectivity is determined as a float in the range of [0, 1], which shows how subjective a word or phrase is.
                            The closer the analysis has a factor of 1, the more subjective it is. And vice versa the closer it is to 0, the less subjective and neutral it is.
                            Subjectivity tends to refer to opinions, emotions or judgements as opposed to objectivity which refers to factual information.
                            <p></p>
                            Taking a look at the Subjectivity graph of both debates, one trend which can seen is that although both Biden are trump are close
                            across the board in terms of how subjective they are, there is an outlier in that Trump has a lot more sentences which has a subjectivity factor of 0; Meaning
                            that Trump spoke with neutral statements than Biden.
                            <p></p>
                            However considering that Trump also dominated the conversations(referring to the sentence analysis) it is
                            hard to make the conclusion that Trump is less subjective since having more say in the conversation would naturally lead to Trump making use of more neutral statements.
                            <p></p>
                            On the other side, extracting from Biden's analysis, interestingly enough there is only one instance where Biden leads Trump. Biden only leads Trump in the number of sentences
                            with a Subjectivity factor of 0.8, despite Trump having spoke more sentences overall.
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
                        <Typography variant="h4" color="secondary" align="center">
                            Polarity Analysis
                        </Typography>
                        <Typography variant="body2" color="primary" component="p">
                            Polarity is determined as a float in the range of [-1, 1], which shows how positive or negative a statement is.
                            The closer the analysis has a factor of 1, the more positive it is. And vice versa the closer it is to 0, the less positive and more negative it is.
                            <p></p>
                            On a per Sentence basis, the Polarity analysis follows the same trend as the Subjectivity analysis, where there is one clear outlier; With the rest of the
                            entries being closer together when comparing Biden and Trump.
                            <p></p>
                            Trump has a lot more sentences with a polarity score of 0 than Biden, so again as mentioned in the Subjectivity analysis above,
                            considering that Trump also dominated the conversations(referring to the sentence analysis) it is
                            hard to make the conclusion that trump is more neutral than Biden since having more say in conversations would naturally lead to a higher number of neutral statements.
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
                        <Typography variant="h4" color="secondary" align="center">
                            General Sentiment Analysis
                        </Typography>
                        <Typography variant="body2" color="primary" component="p">
                            In order to have a better perception on what the above graphs show, it is easier to first put into context in the broader scope, Trump and Biden's statements.
                            This here shows a clear overall distinction of the candidates Subjectivity and Polarity.
                            <p></p>
                            Overall Trump and Biden are pretty similiar in Subjectivity with actually Biden having a slight lead as being the more subjective candidate.
                            <p></p>
                            The Polarity analysis shows a complete different picture contrasting to the candidates similiar subjectivity scores; In terms of Polarity the candidates are in stark contrast
                            with Trump leaning more positive and Biden leaning more negative for sentiment.
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
