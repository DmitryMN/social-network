import React from "react";
import "./usersDialogs.css";
import {UserType} from "../../../redux/reducers/dialogsReducer";


class UsersDialogs extends React.Component<UserType> {

    render() {
        return(
            <div key={this.props.id} className="users_dialogs">
                <div>{this.props.user}</div>
            </div>
        );
    }
}

export default UsersDialogs;
