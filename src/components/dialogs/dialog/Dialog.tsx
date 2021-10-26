import React from "react";
import "./dialog.css";
import {MessageType} from "../../../redux/state";

function Dialog(props: MessageType) {
    return(
        <div key={props.id} className="dialog_item">
            <p>{props.message}</p>
        </div>
    );
}

export default Dialog;