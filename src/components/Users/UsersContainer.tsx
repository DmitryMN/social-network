import React from "react";
import {InitialStateType, setUsersAC, followUnfolllowAC, arrUsersType, setCurrentPageAC, setIsFetchingAC} from "../../redux/reducers/usersReducer";
import {rootReducerType} from "../../redux/store/redux_store";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";
import {usersApi} from "../../api/api";

type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    setUsers: (users: arrUsersType) => void
    onChangeFollowUnfollow: (id: number, follow: boolean) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: () => void
}

export type UsersApiComponentType = MapStateToPropsType & MapDispatchToPropsType;


class UsersApiComponent extends React.Component<UsersApiComponentType> {
    constructor(props: UsersApiComponentType) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        this.props.setIsFetching();
        usersApi.getUsers(this.props.users.pageSize, this.props.users.currentPage).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching();
        });
    }
    onPageChanged(pageNumber: number) {
        this.props.setIsFetching();
        usersApi.getUsers(this.props.users.pageSize, pageNumber).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching();
        });
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

export const UsersContainer = connect(mapStateToProps, {
    setUsers: setUsersAC, onChangeFollowUnfollow: followUnfolllowAC,
    setCurrentPage: setCurrentPageAC, setIsFetching: setIsFetchingAC
})(UsersApiComponent);