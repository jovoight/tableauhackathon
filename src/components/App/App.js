import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";
import ShareBar from "../ShareBar/ShareBar.js";

const App = () => {

  const user = {
    id: 1,
    name: "My Links Website",
    profilePicPath: "./profilepic.png",
    links: [
      {
        title: "Link 1 Title",
        url: "https://www.google.com"
      },
      {
        title: "Link 2 Title",
        url: "link2url"
      },
      {
        title: "Link 3 Title",
        url: "link3url"
      }
    ],
    subscribeLink: {
      title: "Subscribe",
      url: "subscribeurl"
    }
  };

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

  const apiKey = "at_NRI9Zaar6ucd4U4mNbI3WwvAaVrJc";

  const getIp = async () => {
    const result = await axios.get("https://api.ipify.org");
    setIpAddress(result.data);
    console.log(result.data);
  };
  const getLocation = async () => {
    const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`);
    setCountry(result.data.location.country);
    setRegion(result.data.location.region);
    setCity(result.data.location.city);
    console.log("got location");
  };
  const startTimer = () => {
    setStartTime(Date.now());
  };
  const endTimer = () => {
    setEndTime(Date.now());
  };
  const handleClick = () => {
    setClicked(true);
  };
  const handleConverted = () => {
    setConverted(true);
  };
  const postToDatabase = () => {
    axios.post("https://linktreeapianalytics.pythonanywhere.com/visit", params)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  

  useEffect(() => {
    window.addEventListener("pageshow", getIp);
    window.addEventListener("pageshow", getLocation);
    window.addEventListener("pageshow", startTimer);
    window.addEventListener("pagehide", endTimer);
    window.addEventListener("pagehide", postToDatabase);
    console.log(params);
    return (() => {
      window.removeEventListener("pageshow", getIp);
      window.removeEventListener("pageshow", getLocation);
      window.removeEventListener("pageshow", startTimer);
      window.removeEventListener("pagehide", endTimer);
      window.removeEventListener("pagehide", postToDatabase);
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
          handleClick={handleClick}
          linkConvertHandler={handleConverted}
        />
        <ShareBar/>
    </div>
    
  );
};

export default App;
