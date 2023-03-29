import React from 'react';
import BComponent from "./BComponent";

interface MyProps{
}

interface MyState{
    myName:string
}
class AComponent extends React.Component<MyProps,MyState> {


    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            myName:''
        }
        console.log('constructor A')
    }

    shouldComponentUpdate(nextProps: Readonly<MyProps>, nextState: Readonly<MyState>, nextContext: any): boolean {
        console.log('shouldComponentUpdate A')
        return true
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>): any {
        console.log('getSnapshotBeforeUpdate A')
        return null;
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('componentDidUpdate A')
    }

    handleChange = ()=>{
        this.setState({
            myName:'shiran'
        })
    }
    render() {
        console.log('render() A')
        return (
            <div>
                <h1>A method</h1>
                <button onClick={this.handleChange}>click me</button>
                <BComponent/>
            </div>
        );
    }
}

export default AComponent;