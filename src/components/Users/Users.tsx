import React from "react";
import {UsersPropsType} from "./UsersContainer";
import User from "./user/User";
import "./users.css";

const Users = (props: UsersPropsType) => {
    return(
        <div className="users_page">
            <p>Users:</p>
            <div className="users_container">
                <div>
                </div>
                {
                    props.users.users.map(user => <User key={user.id} id={user.id}
                                                        followed={user.followed} fullName={user.fullName}
                                                        status={user.status} location={user.location}
                                                        onChangeFollowUnfollow={props.onChangeFollowUnfollow} setNewUsersHandler={props.setNewUsersHandler}/>)
                }
            </div>
        </div>
    );
}

export default Users;