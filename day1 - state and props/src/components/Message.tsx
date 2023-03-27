import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";
// export default interface CustomerDTO mehema default key word eka dala thiboth import karanne
// import {CustomerDTO} from "../dto/CustomerDTO"; mehema ba import karanne one
// import CustomerDTO from "../dto/CustomerDTO"; mehema

interface MessagePage {
    id?:String
}

interface MyState {
    message?: string;
    userName?: string;
}

class Message extends React.Component<MessagePage, CustomerDTO> {

    constructor(props:Readonly<any> | any) {
        super(props);
        this.state = {
            cusId: 'welcome',
            cusName: 'kamal',
            cusSalary:0
        }
    }

    changeState(){
     this.setState({
         cusId:"how are you : "
     })
    }

    componentDidMount() {
        this.changeState()
    }

    render() {
        return (
            <div>
                <h1>{this.state.cusId} {this.state.cusName} {this.props.id}</h1>
                <h2>{this.state.cusSalary}</h2>
            </div>
        );
    }
}

export default Message;





















