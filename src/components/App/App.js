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
      }
    ],
    subscribeLink: {
      title: "Subscribe",
      url: "subscribeurl"
    }
  };

  const pageVisit = class {
    clicked = false;
    converted = false;
    timeOnSite = 0;
    entryPoint = Document.referrer;

    get clicked() {
      return this.clicked;
    };
    get converted() {
      return this.converted;
    }
    get timeOnSite() {
      return this.timeOnSite;
    };
    get entryPoint() {
      return this.entryPoint;
    };

    /**
     * @param {boolean} clicked;
     */
    set clicked(clicked) {
      this.clicked = clicked;
    };
    /**
     * @param {boolean} converted
     */
    set converted(converted) {
      this.converted = converted;
    };
    /**
     * @param {number} timeOnSite
     */
    set timeOnSite(timeOnSite) {
      this.timeOnSite = timeOnSite;
    };
    //No setter for entryPoint as this will never change
  };

  return (
    <div className="App">
      <Profile 
        name={user.name}
        profilePicPath={user.profilePicPath} 
      />
      <LinkList 
        links={user.links}
        subscribeLink={user.subscribeLink}
      />
      <ShareBar/>
    </div>
  );
};

export default App;
