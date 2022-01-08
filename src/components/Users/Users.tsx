import React from "react";
import {UsersPropsType} from "./UsersContainer";
import User from "./user/User";
import "./users.css";
import axios from "axios";

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    // if(props.users.users.length === 0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
    //         response => {
    //             props.setNewUsers(response.data.items);
    //         }
    //     );
    // }

    render() {
        return(
            <div className="users_page">
                <p>Users:</p>
                <div className="users_container">
                    <div>
                    </div>
                    {
                        this.props.users.users.map(user => <User key={user.id} id={user.id}
                                                            followed={user.followed} name={user.name}
                                                            status={user.status}
                                                            onChangeFollowUnfollow={this.props.onChangeFollowUnfollow} />)
                    }
                </div>
            </div>
        );
    }
}

export default Users;