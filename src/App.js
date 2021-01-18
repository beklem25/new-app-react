import React from 'react'
import './App.css';
import "./Header/Header"
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Dialog from "./Dialog/Dialog";

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
        <div className='app-wrapper-content'>
            <div className='content'>
<Dialog />
            </div>
        </div>


    </div>
  );
}

export default App;
