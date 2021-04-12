import React from "react";
import 'fontsource-roboto';
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";


const Content = () => {
    return(
    <div>
        <Typography variant="h3" color="primary">
            An Analytical Perspective on the US Presidential Debates
        </Typography>
        <Typography variant="body" color="secondary">
            The problem this project aims to address is to provide analysis surrounding the
            election and the presidential debates which is unbiased where its conclusions are driven purely by
            the facts and statistics and not opinion. Upon generating the analysis, the other key problem this
            aims to address is to provide a visualisation of the analysis which is readable and easy to understand
            to the typical news reader.
            <p></p>
            This is a problem as too often graphics are complicated and hard to read
            for the untrained eye, so this project aims to present the analysis in a readable format for the
            readers. This is a particularly important as in modern society where there is an abundance of fake
            news and biased reporting, it is important for there to be access to unbiased analysis and
            commentary supported by the statistics especially something as important as the presidential
            election even after the fact.
            <p></p>
            This project focuses on 4 key topics surrounding Argumentation Analysis; Sentiment Analysis, Analysis at the Word Level, Analysis at the Sentence level and the use of Heatmaps.
            The aforementioned was carried out with the use of NLP techniques, rule based ai and machine learning. From the resulting visualisations, a general explanation and description
            of the analysis is given, providing contect as to what the results mean are are suggesting.
        </Typography>
    </div>
    )
};

export default Content;