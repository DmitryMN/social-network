import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './App.css';

function App() {
  return (
      <div className="appContainer">
          <div className="headerContainer">
              <Header/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
