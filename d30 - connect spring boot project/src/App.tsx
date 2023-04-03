import React from 'react';
import Message from "./component/Message";
import CustomerComp from "./component/customer/CustomerComp";

class App extends React.Component {

    render() {
        return (
            <div>
                <CustomerComp/>
            </div>
        );
    }
}

export default App;