import React from "react";
import "./ShareBar.css";

const ShareBar = () => {
    return (
        <div class="ShareBarContainer">
            <ul className="ShareBar">
                <li>
                    <a href="https://www.instagram.com">
                        <img src={require("./instagram.png")} alt="Instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com">
                        <img src={require("./tiktok.png")} alt="TikTok"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <img src={require("./twitter.png")} alt="Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com">
                        <img src={require("./facebook.png")} alt="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com">
                        <img src={require("./youtube.png")} alt="Youtube"/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ShareBar;