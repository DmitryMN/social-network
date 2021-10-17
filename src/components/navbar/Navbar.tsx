import React from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
    );
}

export default Navbar;