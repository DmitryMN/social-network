import React from "react";
import "./usersDialogs.css";
import {UserType} from "../../../redux/state";


const UsersDialogs = (props: UserType) => {
    return(
        <div key={props.id} className="users_dialogs">
            <div>{props.user}</div>
        </div>
    );
}

export default UsersDialogs;
