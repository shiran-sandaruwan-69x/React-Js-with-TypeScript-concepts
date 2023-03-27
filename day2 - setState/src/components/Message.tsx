import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";
// export default interface CustomerDTO mehema default key word eka dala thiboth import karanne
// import {CustomerDTO} from "../dto/CustomerDTO"; mehema ba import karanne one
// import CustomerDTO from "../dto/CustomerDTO"; mehema
import '../css/message.css'
interface MessagePage {
}

interface MyState {
    message?: string;
    userName?: string;
}

class Message extends React.Component<MessagePage, MyState> {

    constructor(props:Readonly<any> | any) {
        super(props);
        this.state = {
            message: 'welcome',
            userName: 'kamal'
        }
    }

    changeState(){

     this.setState({
         message:"Thank You NameList Me : " +" "+ this.state.userName
     })
    }

    render() {
        return (
            <div className="messagePane">
                <h1 className="h1Tag">{this.state.message}</h1>
                <button onClick={()=>this.changeState()}>click me</button>
            </div>
        );
    }
}

export default Message;





















