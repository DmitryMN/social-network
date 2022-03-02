import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";
import {HeaderMapStatePropsType} from "./HeaderContainer";

const Header = (props: HeaderMapStatePropsType) => {
    return (
        <header className="header">
            <h1>Social Networks</h1>
            <div className="login_block">
                { props.isAuth ? props.login : <NavLink to="/login">Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;