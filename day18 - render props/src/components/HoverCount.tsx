import React from 'react';
import '../css/message.css'
interface MyProps{
    count:number
    countIncrement:any
}
interface MyState{}
class HoverCount extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);

    }

    render() {
        return (
          <div>
              <h1 onMouseOver={this.props.countIncrement}>mouse count {this.props.count}</h1>
          </div>
        );
    }
}

export default HoverCount;