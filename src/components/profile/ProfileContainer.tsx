import React from "react";
import "./profile.css";
import Profile from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <Profile />
        );
    }
}

export default ProfileContainer;