import React from 'react';
import Greet from "./components/Greet";
import Message from "./components/Message";
import {Route, Routes} from "react-router-dom";
import message from "./components/Message";
import Counter from "./components/Counter";


function App() {
  return (
    <div className="App">
    {/*<Counter />  */}
    <Counter addValue={3}/>
    {/*<Message/>*/}
    </div>
  );
}

export default App;
