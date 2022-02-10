import React from "react";
import { ProfileUserNullType } from "../ProfileUserContainer";
import Preloader from "../../preloader/Preloader";

export const UserProfile = ({profiles}: ProfileUserNullType) => {
    if(!profiles) {
        return <Preloader />
    }
    return (
        <div className="user_profile">
            <div className="logo">
            </div>
            <div>{profiles.aboutMe ? profiles.aboutMe: "is empty"}</div>
        </div>
    );
}
