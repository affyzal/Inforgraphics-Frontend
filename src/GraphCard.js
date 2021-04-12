import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import App from "./App";
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

import Test from './test.jpg';
import Biden from "./Biden.png"; // with import


const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 140,
        width: 135
    },

});


const GraphCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}>
                    <img src={Test} />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Analysis
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This type of analysis concerns analysisng the patterns of.....
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions align="right">
                <Button size="small" color="primary" >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default GraphCard;
