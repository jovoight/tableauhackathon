import React from "react";
import "./Link.css";

const Link = ({ title, url, handleClick }) => {

    return (
            <a 
                href={url} 
                className="link"
                onClick={handleClick}
            >
                {`${title}`}
            </a>
    );
};

export default Link;