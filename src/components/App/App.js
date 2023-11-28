import React, { useState } from "react";
import "./App.css";
import Link from "../Link/Link.js";
import Profile from "../Profile/Profile.js";

const App = () => {

  const [user, setUser] = useState();
  const [links, setLinks] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Profile user={user}/>
      </header>
      <LinkList links={links}/>
    </div>
  );
};

export default App;
