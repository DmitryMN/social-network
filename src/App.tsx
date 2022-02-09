import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import Profile from './components/profile/Profile';


const App = () => {
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="main_wrapper">
              <Navbar/>
              <Route path="/profile/:userId" render={() => <Profile />} />
              <Route exact path="/dialogs" render={() => <DialogsContainer />}/>
              <Route exact path="/users" render={() => <UsersContainer/>}/>
          </div>
      </div>
  );
}

export default App;
