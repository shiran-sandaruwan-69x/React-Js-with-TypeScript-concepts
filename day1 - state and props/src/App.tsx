import React from 'react';
import Greet from "./components/Greet";
import Message from "./components/Message";
import {Route, Routes} from "react-router-dom";
import message from "./components/Message";


function App() {
  return (
    <div className="App">
    <Message/>
    <Message id="C002"/>
    </div>
  );
}

export default App;
