import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "./redux/state";

type appPropsType = {
    state: StateType
    addPost: (post: string) => void
    addNewPostText:(text: string) => void
}

function App(props: appPropsType  ) {
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="main_wrapper">
              <Navbar/>
              <Route path="/profile" render={() => <Profile posts={props.state.profiles.posts} addPost={props.addPost} newPost={props.state.profiles.newPost} addNewPostText={props.addNewPostText}/>} />
              <Route exact path="/dialogs" render={() => <Dialogs users={props.state.dialogs.users} messages={props.state.dialogs.messages}/>}/>
          </div>
      </div>
  );
}

export default App;
