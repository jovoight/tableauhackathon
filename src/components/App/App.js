import React, { useState } from "react";
import "./App.css";
import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";

const App = () => {

  const [user, setUser] = useState({
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
      }
    ]
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="App">
      <Profile 
        name={user.name}
        profilePicPath={user.profilePicPath} 
        onUserChange={updateUser}
      />
      <LinkList 
        links={user.links}
      />
    </div>
  );
};

export default App;
