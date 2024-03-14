import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Analytics = () => {
  const [viz, setViz] = useState();
  const [vizReady, setVizReady] = useState(false);

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
        src={
          "https://10ax.online.tableau.com/t/tableauhackathonxpj1/views/Dashboard/Dashboard1"
        }
        hide-tabs={true}
        toolbar="hidden"
        width="1000"
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
        <script
          type="module"
          src="https://public.tableau.com/javascripts/api/tableau.embedding.3.1.0.min.js"
          async
        ></script>
      </Helmet>
      <div>{viz}</div>
    </motion.div>
  );
};

export default Analytics;
