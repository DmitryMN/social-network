import React from "react";
import ProfilePosts from "./profilePosts/ProfilePosts";
import "./profile.css";
import {profilesPropsType} from "../../redux/state";




function Profile(props: profilesPropsType) {
    return(
        <div className="profile_wrapper">
            <div className="logo">
            </div>
            <div>ava + description</div>
            <ProfilePosts posts={props.posts} addPost={props.addPost} newPost={props.newPost} addNewPostText={props.addNewPostText}/>
        </div>
    );
}

export default Profile;