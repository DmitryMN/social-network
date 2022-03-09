import React from "react";
import User from "./user/User";
import "./users.css";
import {InitialStateType} from "../../redux/reducers/usersReducer";
import Preloader from "../preloader/Preloader";

type UsersPropsType = {
    users: InitialStateType
    onChangeFollowUnfollow: (id: number, follow: boolean) => void
    setCurrentPage: (currentPage: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

    const setCurrentPageHandler = (currentPage: number) => {
        props.setCurrentPage(currentPage);
        props.onPageChanged(currentPage);
    }

    let pagesCount = Math.ceil(props.users.totalUsersCount / props.users.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className="users_page">
            <p>Users:</p>
            <div className="users_container">
                {props.users.isFetching && <Preloader />}
                <div>
                    {pages.map(page => <span key={page} className={props.users.currentPage === page ? "selected" : ""}
                                             onClick={() => {
                                                 setCurrentPageHandler(page)
                                             }}>{page}</span>)}
                </div>
                {
                    props.users.users.map(user => <User key={user.id} id={user.id}
                                                        followed={user.followed} name={user.name}
                                                        status={user.status}
                                                        onChangeFollowUnfollow={props.onChangeFollowUnfollow}/>)
                }
            </div>
        </div>
    );
}

export default Users;