import React from "react";

export const ProfileStatus = (props: any) => {
    return (
        <div>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status} />
            </div>
        </div>

    );
}