import React from "react";
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
        url: "link1url"
      },
      {
        title: "Link 2 Title",
        url: "link2url"
      },
      {
        title: "Link 3 Title",
        url: "link3url"
      },
      {
        title: "Subscribe",
        url: "subscribeurl"
      }
    ]
  };

  return (
    <div className="App">
      <Profile 
        name={user.name}
        profilePicPath={user.profilePicPath} 
      />
      <LinkList 
        links={user.links}
      />
      <ShareBar/>
    </div>
  );
};

export default App;
