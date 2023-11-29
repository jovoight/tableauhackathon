import React from "react";
import "./App.css";
import LinkList from "../LinkList/LinkList.js";
import Profile from "../Profile/Profile.js";

const App = () => {

  const user = {
    id: 1,
    name: "My Links Website",
    profilePicturePath: "./images/profilepic.png",
    links: {
      link1: {
        title: "Link 1 Title",
        src: "link1src"
      },
      link2: {
        title: "Link 2 Title",
        src: "link2src"
      },
      link3: {
        title: "Link 3 Title",
        src: "link3src"
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Profile user={user}/>
      </header>
      <LinkList links={user.links}/>
    </div>
  );
};

export default App;
