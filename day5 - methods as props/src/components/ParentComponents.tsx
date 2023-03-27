import React from 'react';
import '../css/message.css'
import ChildComponents from "./ChildComponents";

interface MyProps{

}

interface MyState{
    parentName:string
}
class ParentComponents extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state={
            parentName:'parent components !'
        }
    }

    greetParent =(child:string)=>{
        alert(`hello ${this.state.parentName} from ${child}`)
    }

    render() {

        return (
            <div className="messagePane">
             <ChildComponents greetParent={this.greetParent}/>
            </div>
        );

    }
}

export default ParentComponents;