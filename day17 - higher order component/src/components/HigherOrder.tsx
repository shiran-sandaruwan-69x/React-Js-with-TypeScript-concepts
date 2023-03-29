import React, {MouseEventHandler} from 'react';
import '../css/message.css'
import withCounter from "./hoc/withCounter";
interface MyProps{
    count:number
    incrementCount:MouseEventHandler
}
interface MyState{}

class HigherOrder extends React.Component<MyProps,MyState> {

    render() {
        return (
            <div><button onClick={this.props.incrementCount}>button {this.props.count} time</button></div>
        );
    }
}

export default withCounter(HigherOrder);