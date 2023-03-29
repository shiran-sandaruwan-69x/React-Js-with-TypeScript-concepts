import React from 'react';
import {UserConsumer} from "./userContext";

class ComponentC extends React.Component {
    render() {
        return (
           <UserConsumer>
               {
                   (userName:string)=>{
                       return <h1>Hello there {userName}</h1>
                   }
               }
           </UserConsumer>
        );
    }
}

export default ComponentC;