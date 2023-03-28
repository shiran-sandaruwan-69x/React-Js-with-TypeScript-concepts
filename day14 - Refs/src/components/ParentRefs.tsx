import React from 'react';
import ChildRefs from "./ChildRefs";
import '../css/message.css'

class ParentRefs extends React.Component{

    inputRefs2;

    constructor(props: Readonly<any> | any) {
        super(props);
        this.inputRefs2 = React.createRef<any>()
    }

    componentDidMount() {
        this.inputRefs2.current?.inputRefsMethod();
    }

    getText = ()=>{
        alert(this.inputRefs2.current?.inputRefsMethod())
    }

    render() {
        return (
            <div>
                <ChildRefs ref={this.inputRefs2}/>
                <button onClick={this.getText}>child comp focus</button>
            </div>
        );
    }
}

export default ParentRefs;