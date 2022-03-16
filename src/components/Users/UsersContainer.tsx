import React from "react";
import {InitialStateType, setUsersAC, arrUsersType, setCurrentPageAC, setIsFetchingAC, followThunk, unfollowThunk, setUsersThunk} from "../../redux/reducers/usersReducer";
import {rootReducerType} from "../../redux/store/redux_store";
import {connect} from "react-redux";
import Users from "./Users";
import {usersApi} from "../../api/api";

type MapStateToPropsType = {
    users: InitialStateType
}

export type MapDispatchToPropsType = {
    setUsers: (users: arrUsersType) => void
    onChangeFollow: (id: number, follow: boolean) => void
    onChangeUnfollow: (id: number, follow: boolean) => void
    setCurrentPage: (currentPage: number) => void
    setIsFetching: () => void
    setUsersThunk: (pageSize: number, currentPage: number) => void
}

export type UsersApiComponentType = MapStateToPropsType & MapDispatchToPropsType;


class UsersApiComponent extends React.Component<UsersApiComponentType> {
    constructor(props: UsersApiComponentType) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        // this.props.setIsFetching();
        // usersApi.getUsers(this.props.users.pageSize, this.props.users.currentPage).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setIsFetching();
        // });
        this.props.setUsersThunk(this.props.users.pageSize, this.props.users.currentPage);
    }
    onPageChanged(pageNumber: number) {
        // this.props.setIsFetching();
        // usersApi.getUsers(this.props.users.pageSize, pageNumber).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setIsFetching();
        // });
        this.props.setUsersThunk(this.props.users.pageSize, pageNumber);
    }
    render() {
        return (
            <Users users={this.props.users} onChangeFollow={this.props.onChangeFollow} onChangeUnfollow={this.props.onChangeUnfollow} setCurrentPage={this.props.setCurrentPage} onPageChanged={this.onPageChanged}/>
        );
    }
}

const mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        users: state.users
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers: setUsersAC, onChangeFollow: followThunk, onChangeUnfollow: unfollowThunk,
    setCurrentPage: setCurrentPageAC, setIsFetching: setIsFetchingAC, setUsersThunk,
})(UsersApiComponent);