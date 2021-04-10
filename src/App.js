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
import { Route, Switch } from "react-router-dom";

import HomeBar from './HomeBar'
import Content from './Content'
import Trump from './Trump.png'; // with import
import Biden from './Biden.png'; // with import
import Landing from './Landing';
import AnalysisHome from "./AnalysisHome";
import HeatMaps from "./HeatMaps";
import Word from "./Word";
import Sentence from "./Sentence";
import Sentiment from "./Sentiment";
import 'fontsource-roboto';


const App = () => {
    document.body.style.backgroundColor = "Black";
    return (
        <Switch>
            <Route exact path="/" render={(props) => <Landing {...props} />} />
            <Route
                exact path="/analysishome" render={(props) => <AnalysisHome {...props} />}
            />
            <Route
                exact path="/heatmaps" render={(props) => <HeatMaps {...props} />}
            />
            <Route
                exact path="/word" render={(props) => <Word {...props} />}
            />
            <Route
                exact path="/sentence" render={(props) => <Sentence {...props} />}
            />
            <Route
                exact path="/sentiment" render={(props) => <Sentiment {...props} />}
            />
        </Switch>
  )     ;
};

export default App;
