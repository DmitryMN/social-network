import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {UserProfile} from "./UserProfile/UserProfile";
import { rootReducerType } from "../../redux/store/redux_store";
import {ProfileUserType, setUserProfileAC, setUserProfileThunk} from "../../redux/reducers/profileReducer";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { profileApi } from "../../api/api";

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
        // profileApi.getProfile(userID).then(data => {
        //     this.props.setUserProfile(data);
        // });
        this.props.setUserProfileThunk(userID);
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



const connector = connect(mapStateToProps, {setUserProfileThunk});

type ProfileUsersPropsType = ConnectedProps<typeof connector>;

const WithUrlDataContainerComponent = withRouter(ProfileUserApiContainer);

export default connector(WithUrlDataContainerComponent);


