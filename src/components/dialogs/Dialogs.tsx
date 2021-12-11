import React, {ChangeEvent} from "react";
import Dialog from "./dialog/Dialog";
import UsersDialogs from "./usersDialogs/UsersDialogs";
import "./dialogs.css";
import {DialogsPropsTypeStDis} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsTypeStDis) => {

    const addMessageHandler = () => {
        props.addMessageHandler(props.dialogs.newMessageText);
    }

    const onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeNewMessageHandler(e.currentTarget.value);
    }

    return(
        <div className="dialogs">
            <div className="dialogs_container">
                <div className="users_container">
                    <h3>Dialogs</h3>
                    {
                        props.dialogs.users.map(users => <UsersDialogs id={users.id} user={users.user}/>)
                    }
                </div>
                <div className="user_post">
                    <div className="post_title">
                        Max Volkov
                    </div>
                    <div className="addMessage_container">
                        <textarea rows={2} onChange={onChangeNewMessageHandler}/>
                        <button onClick={addMessageHandler}>Add message</button>
                    </div>
                    {
                        props.dialogs.messages.map(message => <Dialog id={message.id} message={message.message}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Dialogs;