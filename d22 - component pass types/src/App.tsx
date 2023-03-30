import React from 'react';
import ProfileComponent from "./components/ProfileComponent";
import LoginComp from "./components/LoginComp";


function App() {

  return (
    <div className="App">
     <ProfileComponent component={LoginComp}/>
    </div>
  );
}

export default App;
