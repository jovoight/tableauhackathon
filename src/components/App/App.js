import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";
import ShareBar from "../ShareBar/ShareBar.js";

const App = () => {

  const [ipAddress, setIpAddress] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [converted, setConverted] = useState(false);
  let referrer;
  if (Document.referrer) {
    referrer = Document.referrer;
  } else {
    referrer = "";
  };

  const params = {
    ipAddress: ipAddress,
    country: country,
    region: region,
    city: city,
    startTime: startTime,
    endTime: endTime,
    clicked: clicked,
    converted: converted,
    referrer: referrer
  };

  const ipifyApiKey = "at_NRI9Zaar6ucd4U4mNbI3WwvAaVrJc";

  const getIp = async () => {
    const result = await axios.get("https://api.ipify.org");
    setIpAddress(result.data);
  };
  const getLocation = async () => {
    const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${ipifyApiKey}&ipAddress=${ipAddress}`);
    setCountry(result.data.location.country);
    setRegion(result.data.location.region);
    setCity(result.data.location.city);
    console.log("Successfully retrieved location.");
  };
  const startTimer = () => {
    setStartTime(Date.now());
  };
  const endTimer = () => {
    setEndTime(Date.now());
  };
  const clickHandler = () => {
    setClicked(true);
    console.log("clicked!")
  };
  const convertHandler = () => {
    setConverted(true);
  };
  const postToDatabase = () => {
    alert("posted!");
    axios.post("https://linktreeapianalytics.pythonanywhere.com/visits", params).catch(err => console.log(err)); 
    console.log(`Successfully posted to database with the following parameters: ${params}`);   
  };
    
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

  useEffect(() => {
    window.addEventListener("load", getIp);
    window.addEventListener("load", getLocation);
    window.addEventListener("load", startTimer);
    window.addEventListener("beforeunload", endTimer);
    window.addEventListener("beforeunload", postToDatabase, {
      
    });
    return (() => {
      window.removeEventListener("load", getIp);
      window.removeEventListener("load", getLocation);
      window.removeEventListener("load", startTimer);
      window.removeEventListener("beforeunload", endTimer);
      window.removeEventListener("beforeunload", postToDatabase);
    });
  }, []);
  
  return (
    <div className="App">
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
        <ShareBar />
    </div>
    
  );
};

export default App;
