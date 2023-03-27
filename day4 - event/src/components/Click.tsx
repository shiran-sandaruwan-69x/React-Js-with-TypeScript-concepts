import React from 'react';
import '../css/message.css'


class Click extends React.Component {

    customerSave(){
        console.log("customer saved !")
    }
    render() {

        return (
            <div className="messagePane">
                {/* me kama dekatama event eka wada karanawa */}
               <button onClick={this.customerSave}>click me 1</button>
                <button onClick={()=>{this.customerSave()}}>click me 2</button>
            </div>
        );
    }
}

export default Click;