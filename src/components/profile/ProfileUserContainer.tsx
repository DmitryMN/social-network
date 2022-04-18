import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {UserProfile} from "./UserProfile/UserProfile";
import { rootReducerType } from "../../redux/store/redux_store";
import {ProfileUserType, setUserProfileThunk, setStatusThunk} from "../../redux/reducers/profileReducer";
import { withRouter, RouteComponentProps} from "react-router-dom";
import { compose } from "redux";

export type ProfileUserNullType = {
    profiles: ProfileUserType | null
    status: string
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
        this.props.setUserProfileThunk(userID);
        this.props.setStatusThunk(userID);
    }
    
    render() {
        return(
            <>
              <UserProfile profiles={this.props.profiles} status={this.props.status}/>
            </>
        );
    }
}

const mapStateToProps = (state: rootReducerType): ProfileUserNullType => {
    return {
        profiles: state.profiles.profile,
        status: state.profiles.status
    }
}

const connector = connect(mapStateToProps, {setUserProfileThunk, setStatusThunk});

type ProfileUsersPropsType = ConnectedProps<typeof connector>;

export default compose<React.ComponentType>(
    connector,
    withRouter,
)(ProfileUserApiContainer);



// const WithUrlDataContainerComponent = withRouter(ProfileUserApiContainer);

// export default connector(WithUrlDataContainerComponent);


