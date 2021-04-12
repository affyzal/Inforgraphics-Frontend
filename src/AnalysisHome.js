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
import Sent from './img/SentCard.png'
import Word from './img/WordCard.png'
import Heat from './img/HeatCard.png'
import Sentence from './img/SentenceCard.png'

import HomeBar from './HomeBar'
import Content from './Content'
import Trump from './Trump.png'; // with import
import Biden from './Biden.png'; // with import
import GraphCard from "./GraphCard";
import 'fontsource-roboto';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Test from "./test.jpg";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 140,
        width: 135
    },

});

const AnalysisHome = () => {
    document.body.style.backgroundColor = "Black";
    const classes = useStyles();
    return (
        <div>
            <div>
                <Grid container direction="column">
                    <Grid item><HomeBar /></Grid>
                </Grid>
            </div>
            <div>
                <Typography variant="h4" color="secondary" align="center">
                    Analysis Home
                </Typography>
            </div>
            <div>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={Sent} height="150" width="350"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                                        Sentiment Analysis
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Using NLP to analyse the sentiment of the Presidential Debates.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions align="right">
                                <Button size="small" color="primary" >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={Sentence} height="150" width="350"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                                        Sentence Analysis
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Sentence level analysis of the debates.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions align="right">
                                <Button size="small" color="primary" >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={Word} height="160" width="350"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                                        Word Analysis
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Word level analysis of the debates.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions align="right">
                                <Button size="small" color="primary" >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={Heat} height="160" width="350"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                                        Heatmaps
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Visualising the Heat of the debates with Heat Map.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions align="right">
                                <Button size="small" color="primary" >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AnalysisHome;