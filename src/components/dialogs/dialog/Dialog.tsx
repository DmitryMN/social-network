import React from "react";
import "./dialog.css";
import {MessageType} from "../../../redux/reducers/dialogsReducer";

class Dialog extends React.Component<MessageType> {
    constructor(props: MessageType) {
        super(props);
    }

    render() {
        return(
            <div key={this.props.id} className="dialog_item">
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Dialog;