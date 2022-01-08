import React from "react";
import "./profile.css";
import {ProfilePostContainer} from "./profilePosts/ProfilePostsContainer";

class Profile extends React.Component {
    render() {
        return(
            <div className="profile_wrapper">
                <div className="logo">
                </div>
                <div>ava + description</div>
                <ProfilePostContainer/>
            </div>
        );
    }
}

export default Profile;