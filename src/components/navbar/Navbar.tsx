import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <a href="/profile">Profile</a>
            <a href="/dialogs">Messages</a>
            <a href="/users">Users</a>
            <a href="/news">News</a>
            <a href="/music">Music</a>
            <a href="/settings">Settings</a>
        </nav>
    );
}

export default Navbar;