import React from 'react';
import UserList from "./components/UserList";
import ToDoList from "./components/ToDoList";
import './css/message.css'
import HOC from "./components/HOC";

function App() {

  return (
    <div className="App">
      <UserList/>
      <ToDoList/>
    </div>
  );
}

export default App;
