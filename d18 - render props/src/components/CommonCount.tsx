import React from 'react';

interface MyProps{
    //getCount:any
    children:any
}
interface MyState{count:number}
class CommonCount extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            count:0
        }
    }

    countIncrement =()=>{
        this.setState(prevState=>{
            return {count : prevState.count + 1 }
        })
    }

    // render() {
    //     return this.props.getCount(this.state.count,this.countIncrement)
    // }

    // or

    render() {
        return this.props.children(this.state.count,this.countIncrement)
    }

}

export default CommonCount;