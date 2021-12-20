import React from "react";
import {InitialStateType, setUsersAC, followUnfolllowAC, arrUsersType} from "../../redux/reducers/usersReducer";
import {rootReducerType} from "../../redux/store/redux_store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";

type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    setNewUsersHandler: (users: arrUsersType) => void
    onChangeFollowUnfollow: (id: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return { users: state.users }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType  => {
    return {
        setNewUsersHandler: (users: arrUsersType) => {
            dispatch(setUsersAC(users));
        },
        onChangeFollowUnfollow: (id: number) => {
            dispatch(followUnfolllowAC(id));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);