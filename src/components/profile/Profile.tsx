import React from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";
import "./profile.css";
import {profilesPropsType} from "../../redux/state";




const Profile = (props: profilesPropsType) => {
    return(
        <div className="profile_wrapper">
            <div className="logo">
            </div>
            <div>ava + description</div>
            <ProfilePosts posts={props.posts} newPost={props.newPost} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;