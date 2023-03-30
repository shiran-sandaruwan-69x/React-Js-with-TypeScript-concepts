import React from 'react';
import PyText from "./components/polymorphic/PyText";

function App() {

  return (
    <div className="App">
      <PyText as='h1'/>
      <PyText as='p'/>
      <PyText as='label'/>
      <PyText as='h4'/>
    </div>
  );
}

export default App;
