import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";
import ShareBar from "../ShareBar/ShareBar.js";
import DataTester from "../DataTester/DataTester.js";

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

  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [converted, setConverted] = useState(false);
  const referrer = Document.referrer;

  const postToDatabase = () => {
    axios.post("api/endpoint", {
      params: "params"
    })
  };

  const apiKey = "at_NRI9Zaar6ucd4U4mNbI3WwvAaVrJc";

  useEffect(() => {
    //On page show
    const getIp = async () => {
      const result = await axios.get("https://api.ipify.org");
      setIp(result.data);
    };
    getIp();

    const getLocation = async () => {
      const result = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
      setLocation(result.data.location);
    };
    getLocation();

    setStartTime(Date.now());
    //On page hide
    return () => {
      setEndTime(Date.now());
      postToDatabase();
    };
  }, [ip]);



  const handleClick = () => {
    setClicked(true);
  };
  const handleConverted = () => {
    setConverted(true);
  };

  return (
    <div className="App">
      <DataTester
        ip={ip}
        location={location}
        startTime={startTime}
        endTime={endTime}
        clicked={clicked}
        converted={converted}
        referrer={referrer}
      >
        <Profile 
          name={user.name}
          profilePicPath={user.profilePicPath}
        />
        <LinkList 
          links={user.links}
          subscribeLink={user.subscribeLink}
          linkClickHandler={handleClick}
          linkConvertHandler={handleConverted}
        />
        <ShareBar/>
      </DataTester>
    </div>
    
  );
};

export default App;
