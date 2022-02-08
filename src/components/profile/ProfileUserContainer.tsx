import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {UserProfile} from "./UserProfile/UserProfile";
import { rootReducerType } from "../../redux/store/redux_store";
import {ProfileUserType, setUserProfileAC} from "../../redux/reducers/profileReducer";
import { type } from "os";

export type ProfileUserNullType = {
    profiles: ProfileUserType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileUserType) => void 
}

type ProfileUsersPropsType = ProfileUserNullType & MapDispatchPropsType

class ProfileUserApiContainer extends React.Component<ProfileUsersPropsType> {
    constructor(props: ProfileUsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get<ProfileUserType>("https://social-network.samuraijs.com/api/1.0/profile/2").then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    
    render() {
        return(
            <>
              <UserProfile profiles={this.props.profiles}/>
            </>
        );
    }
}

const mapStateToProps = (state: rootReducerType): ProfileUserNullType => {
    return {
        profiles: state.profiles.profile
    }
}

export const ProfileUserContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC})(ProfileUserApiContainer);

export default ProfileUserContainer;

