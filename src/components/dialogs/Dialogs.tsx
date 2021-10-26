import React from "react";
import Dialog from "./dialog/Dialog";
import UsersDialogs from "./usersDialogs/UsersDialogs";
import "./dialogs.css";
import {DialogsType} from "../../redux/state";

function Dialogs(props: DialogsType) {
    return(
        <div className="dialogs">
            <div className="dialogs_container">
                <div className="users_container">
                    <h3>Dialogs</h3>
                    {
                        props.users.map(users => <UsersDialogs id={users.id} user={users.user}/>)
                    }
                </div>
                <div className="user_post">
                    <div className="post_title">
                        Max Volkov
                    </div>
                    <div className="addMessage_container">
                        <textarea rows={2}></textarea>
                        <button>Add message</button>
                    </div>
                    {
                        props.messages.map(message => <Dialog id={message.id} message={message.message}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Dialogs;