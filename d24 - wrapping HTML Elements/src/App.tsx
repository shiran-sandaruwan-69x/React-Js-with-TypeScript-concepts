import React from 'react';
import Button from "./components/Button";

function App() {

  return (
    <div className="App">
        <Button
            colorBtn={'yellow'}
            variant={'primary'}
            onClick={()=>{alert('welcome there')}}
        >
            hello i am children
            <p>wel come</p>
        </Button>
    </div>
  );
}

export default App;
