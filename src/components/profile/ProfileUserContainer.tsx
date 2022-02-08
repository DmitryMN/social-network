import React from "react";
import "./profile.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {UserProfile} from "./UserProfile/UserProfile";
import { rootReducerType } from "../../redux/store/redux_store";
import {ProfileType} from "../../redux/reducers/profileReducer";

type MapStateToPropsType = {
    profiles: ProfileType | null
}

class ProfileUserContainer extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2");
    }

    render() {
        return(
            <>
              <UserProfile/>
            </>
        );
    }
}

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        profiles: state.profiles.profile
    }
}

export default ProfileUserContainer;

