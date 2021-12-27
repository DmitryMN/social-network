import React from "react";
import {UsersPropsType} from "./UsersContainer";
import User from "./user/User";
import "./users.css";
import axios from "axios";

const Users = (props: UsersPropsType) => {

    if(props.users.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                props.setNewUsers(response.data.items);
            }
        );
        //
        // props.setNewUsers([
        //     {id: 1, followed: true, name: "Dmitrii", status: "I am a developer",},
        //     {id: 2, followed: true, name: "Alex", status: "I am a doctor",},
        //     {id: 3, followed: false, name: "Boris", status: "I am a manager"},
        //     {id: 4, followed: false, name: "Masha", status: "I am a student"},
        // ]);
    }

    return(
        <div className="users_page">
            <p>Users:</p>
            <div className="users_container">
                <div>
                </div>
                {
                    props.users.users.map(user => <User key={user.id} id={user.id}
                                                        followed={user.followed} name={user.name}
                                                        status={user.status}
                                                        onChangeFollowUnfollow={props.onChangeFollowUnfollow} />)
                }
            </div>
        </div>
    );
}

export default Users;