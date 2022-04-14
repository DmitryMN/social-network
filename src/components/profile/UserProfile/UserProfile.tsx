import React from "react";
import { ProfileUserNullType } from "../ProfileUserContainer";
import Preloader from "../../preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";


export const UserProfile = ({profiles}: ProfileUserNullType) => {
    if(!profiles) {
        return <Preloader />
    }
    return (
        <div className="user_profile">
            <div className="logo">
            </div>
            <ProfileStatus status="I am frontend developer" />
            <div>Full Name: {profiles.fullName}</div>
            <div>About me: {profiles.aboutMe ? profiles.aboutMe : "is empty"}</div>
        </div>
    );
}
