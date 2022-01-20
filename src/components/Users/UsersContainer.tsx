import React from "react";
import {InitialStateType, setUsersAC, followUnfolllowAC, arrUsersType, setCurrentPageAC} from "../../redux/reducers/usersReducer";
import {rootReducerType} from "../../redux/store/redux_store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";

type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    setUsers: (users: arrUsersType) => void
    onChangeFollowUnfollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
}

export type UsersApiComponentType = MapStateToPropsType & MapDispatchToPropsType;


class UsersApiComponent extends React.Component<UsersApiComponentType> {
    constructor(props: UsersApiComponentType) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.users.pageSize}&page=${this.props.users.currentPage}`).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    onPageChanged(pageNumber: number) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.users.pageSize}&page=${pageNumber}`).then(
            response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        return (
            <Users users={this.props.users} onChangeFollowUnfollow={this.props.onChangeFollowUnfollow} setCurrentPage={this.props.setCurrentPage} onPageChanged={this.onPageChanged}/>
        );
    }
}

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType  => {
    return {
        setUsers: (users: arrUsersType) => {
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);