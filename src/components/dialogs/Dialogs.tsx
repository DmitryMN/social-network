import React from "react";
import Dialog from "./dialog/Dialog";
import UsersDialogs from "./usersDialogs/UsersDialogs";
import "./dialogs.css";

function Dialogs() {
    return(
        <div className="dialogs">
            <div className="dialogs_container">
                <div className="users_container">
                    <h3>Dialogs</h3>
                    <UsersDialogs />
                </div>
                <div className="user_post">
                    <div className="post_title">
                        Max Volkov
                    </div>
                    <div className="addMessage_container">
                        <textarea rows={2}></textarea>
                        <button>Add message</button>
                    </div>
                    <Dialog />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;