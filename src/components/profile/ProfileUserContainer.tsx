import React from "react";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {UserProfile} from "./UserProfile/UserProfile";
import { rootReducerType } from "../../redux/store/redux_store";
import {ProfileUserType, setUserProfileAC} from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

export type ProfileUserNullType = {
    profiles: ProfileUserType | null
}

type PathParamType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamType> & ProfileUsersPropsType;

class ProfileUserApiContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if(!userID) {
            userID = "2";
        }
        axios.get<ProfileUserType>("https://social-network.samuraijs.com/api/1.0/profile/" + userID).then((response) => {
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



const connector = connect(mapStateToProps, {setUserProfile: setUserProfileAC});

type ProfileUsersPropsType = ConnectedProps<typeof connector>;

const WithUrlDataContainerComponent = withRouter(ProfileUserApiContainer);

export default connector(WithUrlDataContainerComponent);


