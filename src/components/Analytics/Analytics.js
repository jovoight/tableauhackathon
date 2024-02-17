import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

// import { TableauViz, TableauEventType, FilterUpdateType } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

/*
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
    }, []);

    return (
        <>
            <Helmet>
                <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.1.0.min.js" async></script>
            </Helmet>
            <div>
                <tableau-viz {...vizAttributes}></tableau-viz>
            </div>
        </>
    );
};

export default Analytics;
*/

const Analytics = () => {
    const [ viz, setViz ] = useState();
    const [ vizReady, setVizReady ] = useState(false);

    const vizRef = useRef(null);

    const vizIsReady = async (e) => {
        setVizReady(true);
    };

    useEffect(() => {
        console.log("[App.js] VizRef", vizRef);
        if (vizRef.current) {
            const vizEl = vizRef.current;
            vizEl.addEventListener("firstinteractive", vizIsReady);
        }
    }, [vizRef]);

    const loadViz = () => {
        setViz(
            <tableau-viz
                ref={vizRef}
                id="tableauViz"
                src={"https://public.tableau.com/views/WorldIndicators/GDPpercapita"}
                hide-tabs={true}
                toolbar="hidden"
            />
        );
    };

    useEffect(() => {
        loadViz();
    });

    return (
        <motion.div
            className="Analytics"
            initial={{ x: 2000, opacity: 0 }} 
            animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }} 
            exit={{ x: -2000, opacity: 0, transition: { duration: 0.7 } }}
        >
            <Helmet>
                <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.1.0.min.js" async></script>
            </Helmet>
            <div>
                {viz}
            </div>
        </motion.div>
    );
};

export default Analytics;