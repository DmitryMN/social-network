import React, {ChangeEvent} from "react";
import Dialog from "./dialog/Dialog";
import UsersDialogs from "./usersDialogs/UsersDialogs";
import "./dialogs.css";
import {DialogsPropsTypeStDis} from "./DialogsContainer";

class Dialogs extends React.Component<DialogsPropsTypeStDis>{

    constructor(props: DialogsPropsTypeStDis) {
        super(props);
    }

    addMessageHandler = () => {
        this.props.addMessageHandler(this.props.dialogs.newMessageText);
    }

    onChangeNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.props.onChangeNewMessageHandler(e.currentTarget.value);
    }

    render() {
        return(
            <div className="dialogs">
                <div className="dialogs_container">
                    <div className="users_container">
                        <h3>Dialogs</h3>
                        {
                            this.props.dialogs.users.map(users => <UsersDialogs id={users.id} user={users.user}/>)
                        }
                    </div>
                    <div className="user_post">
                        <div className="post_title">
                            Max Volkov
                        </div>
                        <div className="addMessage_container">
                            <textarea value={this.props.dialogs.newMessageText} rows={2} onChange={this.onChangeNewMessageHandler}/>
                            <button onClick={this.addMessageHandler}>Add message</button>
                        </div>
                        {
                            this.props.dialogs.messages.map(message => <Dialog id={message.id} message={message.message}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialogs;