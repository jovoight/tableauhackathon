import React from "react";
import "./Profile.css";

const Profile = ({ name, profilePicPath }) => {
    return (
        <div className="Profile">
            <img src={require(`${profilePicPath}`)} alt="Profile Pic" className="profile-pic"/>
            <p className="name">{name}</p>
        </div>
    );
};

export default Profile;