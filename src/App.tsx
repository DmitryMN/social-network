import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import Profile from './components/profile/Profile';


const App = () => {
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="main_wrapper">
              <Navbar/>
              <Route path="/profile" render={() => <Profile />} />
              <Route exact path="/dialogs" render={() => <DialogsContainer />}/>
              <Route exact path="/users" render={() => <UsersContainer/>}/>
          </div>
      </div>
  );
}

export default App;
