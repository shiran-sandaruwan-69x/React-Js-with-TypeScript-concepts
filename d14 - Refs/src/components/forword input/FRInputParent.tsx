import React from 'react';
import FrInput from "./FRInput";
import './message.css'
class FrInputParent extends React.Component {

    inputRefs;

    constructor(props: Readonly<any> | any) {
        super(props);
        this.inputRefs=React.createRef<any>()
    }

    customerSave = ()=>{
        this.inputRefs.current?.focus()
    }

    render() {
        return (
            <div>
                <FrInput ref={this.inputRefs}/>
                <button onClick={this.customerSave}>click me</button>
            </div>
        );
    }
}

export default FrInputParent;