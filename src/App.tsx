import React from 'react';
import HeaderContainer from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';

function App() {
  return (
      <div className="App">
          <HeaderContainer/>
          <div className="navbar_container">
              <Navbar/>
          </div>
      </div>
  );
}

export default App;
