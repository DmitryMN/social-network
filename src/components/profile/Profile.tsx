import React from "react";
import "./profile.css";
import {ProfilePostContainer} from "./profilePosts/ProfilePostsContainer";
import ProfileUserContainer from "./ProfileUserContainer";

class Profile extends React.Component {
    render() {
        return(
            <div className="profile_wrapper">
                <ProfileUserContainer/>
                <ProfilePostContainer/>
            </div>
        );
    }
}

export default Profile;