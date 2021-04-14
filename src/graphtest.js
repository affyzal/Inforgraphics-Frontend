import React from 'react';
import Plot from 'react-plotly.js';
import HeatMaps from "./HeatMaps";
import {Button, Grid} from "@material-ui/core";
import HomeBar from "./HomeBar";
import {Link} from "react-router-dom";

const Test = () => {
        return (
            <div>
                <Grid container direction="column">
                    <Grid item><HomeBar /></Grid>
                </Grid>
                <div align="center">
                    <p></p>
                <Link to="/test">
                    <Button variant="contained" color="secondary">
                        BACK
                    </Button>
                </Link>
                </div>
            <div align="center">
                <p></p>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 600, height: 600, title: 'A Fancy Plot'} }
            />
            </div>
            </div>
        );
}

export default Test;
