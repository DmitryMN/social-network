import React from "react";
import Post from "./post/Post";
import "./profile.css";

function Profile() {
    return(
        <div className="profile_wrapper">
            <div className="logo">
            </div>
            <div>ava + description</div>
            <Post/>
        </div>
    );
}

export default Profile;