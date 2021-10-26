import React from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";
import "./profile.css";
import {ProfilesType} from "../../redux/state";

function Profile(props: ProfilesType) {
    return(
        <div className="profile_wrapper">
            <div className="logo">
            </div>
            <div>ava + description</div>
            <ProfilePosts posts={props.posts}/>
        </div>
    );
}

export default Profile;