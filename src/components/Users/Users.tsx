import React from "react";
import {UsersPropsType} from "./UsersContainer";
import User from "./user/User";
import "./users.css";
import axios, { AxiosResponse } from "axios";
import { type } from "os";


type UserApiItemsType = {
    id: number
    name: string
    uniqueUrlName: any
    photos: {
        small: string
        large: string
    }
    status: any
    followed: boolean
}

type AaType = {
    items: Array<UserApiItemsType>
}

const Users = (props: UsersPropsType) => {
    if(props.users.users.length === 0) {

        axios.get<AaType>("https://social-network.samuraijs.com/api/1.0/users").then(
            response => {
                debugger
                props.setNewUsers(response.data.items);
            }
        );
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