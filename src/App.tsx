import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="main_wrapper">
              <Navbar/>
              <Route path="/profile" render={() => <Profile/>}/>
              <Route path="/dialogs" render={() => <Dialogs/>}/>
          </div>
      </div>
  );
}

export default App;
