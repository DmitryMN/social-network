import React from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";
import "./profile.css";

function Profile() {
    return(
        <div className="profile_wrapper">
            <div className="logo">
            </div>
            <div>ava + description</div>
            <ProfilePosts/>
        </div>
    );
}

export default Profile;