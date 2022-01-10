import React from "react";
import {InitialStateType, setUsersAC, followUnfolllowAC, arrUsersType, setCurrentPageAC} from "../../redux/reducers/usersReducer";
import {rootReducerType} from "../../redux/store/redux_store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";

type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    setNewUsers: (users: arrUsersType) => void
    onChangeFollowUnfollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType  => {
    return {
        setNewUsers: (users: arrUsersType) => {
            dispatch(setUsersAC(users));
        },
        onChangeFollowUnfollow: (id: number) => {
            dispatch(followUnfolllowAC(id));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);