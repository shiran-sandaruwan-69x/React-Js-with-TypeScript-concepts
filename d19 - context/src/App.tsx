import React from 'react';
import ComponentA from "./components/ComponentA";
import {UserProvider} from "./components/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="kamal">
          <ComponentA/>
      </UserProvider>
    </div>
  );
}

export default App;
