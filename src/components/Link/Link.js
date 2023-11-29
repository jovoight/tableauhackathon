import React from "react";
import "./Link.css";

const Link = ({ title, url }) => {
    return (
        <a href={url} className="link">
            {`${title}`}
        </a>
    );
};

export default Link;