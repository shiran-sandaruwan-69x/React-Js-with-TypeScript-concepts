import React from 'react';
import '../css/message.css'
interface MyProps{
    count:number
    countIncrement:any
}
interface MyState{}
class ClickCount extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.countIncrement}>count {this.props.count}</button>
        );
    }
}

export default ClickCount;