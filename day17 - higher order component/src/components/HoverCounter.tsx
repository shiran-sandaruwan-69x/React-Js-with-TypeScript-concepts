import React, {MouseEventHandler} from 'react';
import withCounter from "./hoc/withCounter";
interface MyProps{
    count:number
    incrementCount:MouseEventHandler
}
interface MyState{}
class HoverCounter extends React.Component<MyProps,MyState> {

    render() {
        return (
            <h1 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h1>
        );
    }
}

export default withCounter(HoverCounter,10);