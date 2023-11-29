import React from "react";
import "./LinkList.css";
import Link from "../Link/Link.js";

const LinkList = ({ links }) => {

    return (
        <div className="LinkList">
            {links.map((link) => {
                return (
                    <Link 
                        title={link.title}
                        url={link.url}
                    />
                );
            })}
        </div>
    );
};

export default LinkList;