import React, { useState, useEffect } from "react";
import { TableauViz, TableauEventType, FilterUpdateType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

const Analytics = () => {
    const [vizAttributes, setVizAttributes] = useState({});

    let viz, workbook, activeSheet;

    useEffect(() => {
        setVizAttributes({
            id: "analyticsViz",
            className: "viz",
            src: "https://public.tableau.com/views/WorldIndicators/GDPpercapita" // this is a placeholder
        });

        console.log("end of use effect");
    })

    return (
        <div>
            <tableau-viz {...vizAttributes}></tableau-viz>
        </div>
    );
};

export default Analytics;