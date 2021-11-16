import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StorageType} from "./redux/state";


type appPropsType = {
    storage: StorageType
}

const App: React.FC<appPropsType> = (props) => {
  const state = props.storage.getState();
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="main_wrapper">
              <Navbar/>
              <Route path="/profile" render={() => <Profile posts={state.profiles.posts}
                                                            newPost={state.profiles.newPost}
                                                            dispatch={props.storage.dispatch.bind(props.storage)}/>} />
              <Route exact path="/dialogs" render={() => <Dialogs users={state.dialogs.users}
                                                                  messages={state.dialogs.messages}
                                                                  newMessageText={state.dialogs.newMessageText}
                                                                  dispatch={props.storage.dispatch.bind(props.storage)}/>}/>
          </div>
      </div>
  );
}

export default App;
