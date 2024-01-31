import React, { useEffect } from "react";
import axios from "axios";

import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";
import ShareBar from "../ShareBar/ShareBar.js";
import NavArrow from "../NavArrow/NavArrow.js";

const Home = () => {

  let referrer;
  if (Document.referrer) {
    referrer = Document.referrer;
  } else {
    referrer = "";
  }

  const params = {
    ipAddress: "",
    country: "",
    region: "",
    city: "",
    startTime: "",
    endTime: "",
    clicked: false,
    converted: false,
    referrer: referrer
  }

  const ipifyApiKey = "at_kcCsMwn4Nrt5iq99m5t8f3gMSldlX";

  const clickHandler = () => {
    params.clicked = true;
    putToDatabase();
  }
  const convertHandler = () => {
    params.converted = true;
    putToDatabase();
  }
  const startTimer = () => {
    const timeElapsed = Date.now();
    const startingTime = new Date(timeElapsed);
    params.startTime = startingTime.toUTCString();
    console.log("set start time");
  }

  const putToDatabase = () => {
    const timeElapsed = Date.now();
    const endingTime = new Date(timeElapsed);
    params.endTime = endingTime.toUTCString();
    axios.put("https://linktreeapianalytics.pythonanywhere.com/visits", params);
    console.log("Put to database with params:");
    console.log(params);
  }

  useEffect(() => {
    startTimer();
    setInterval(putToDatabase, 10000);

    async function postToDatabase() {

      const ipRes = await axios.get("https://api.ipify.org").catch(err => console.log(err));
      params.ipAddress = ipRes.data;
      console.log("set IP");

      const locationRes = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipifyApiKey}&ipAddress=${params.ipAddress}`).catch(err => console.log(err));
      params.country = locationRes.data.location.country;
      params.region = locationRes.data.location.region;
      params.city = locationRes.data.location.city;
      console.log("got location");


      const postRes = await axios.post("https://linktreeapianalytics.pythonanywhere.com/visits", params)
      const rowId = postRes.data.new_row_id;
      params.rowId = rowId;    
      console.log("Posted to the database with params:");
      console.log(params);
    };
    postToDatabase();
  }, []);
  
    
  const user = {
    id: 1,
    name: "My Links Website",
    profilePicPath: "./profilepic.png",
    handleClick: clickHandler,
    handleConvert: convertHandler,
    links: [
      {
        key: 0,
        title: "Link 1 Title",
        url: "https://www.google.com"
      },
      {
        key: 1,
        title: "Link 2 Title",
        url: "link2url"
      },
      {
        key: 2,
        title: "Link 3 Title",
        url: "link3url"
      }
    ],
    subscribeLink: {
      title: "Subscribe",
      url: "subscribeurl"
    }
  };

  return (
    <div className="Home">
        <Profile 
          name={user.name}
          profilePicPath={user.profilePicPath}
        />
        <LinkList 
          links={user.links}
          subscribeLink={user.subscribeLink}
          handleClick={user.handleClick}
          handleConvert={user.handleConvert}
        />
        <NavArrow />
        <ShareBar />
    </div>
    
  );
};

export default Home;
