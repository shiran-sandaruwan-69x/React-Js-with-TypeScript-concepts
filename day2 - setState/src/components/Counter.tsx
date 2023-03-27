import React from 'react';
import '../css/message.css'

interface MyProps {
    addValue:number
}

interface Count {
    count?: number
}

class Counter extends React.Component<MyProps, Count> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment() {
        // let num1 = this.state.count as number +1
        // let sum= num1+1
        this.setState({
                count: this.state.count as number + 1
            },
            () => {
            // apita call back funtion eka use karanna puluwan update una value eka ganna
                console.log("call back function : "+this.state.count)
                // first time button eka click karama mekata enne update value eka == call back function : 1
            }
        )
        // first time button eka click karama mekata enne == this normal : 0
        console.log(" this normal : "+this.state.count)
    }

    // -----------------------------------------------------------------------------------------------------

    incrementPrevState(){
        this.setState(prevState=>({
            // meken prevState value eka 5 s sarayak call wela enne

            count:prevState.count as number + 1

        }),()=>{
            console.log("call back function : "+this.state.count)
            // answer 1 st time button click == call back function : 5
            // answer 2 st time button click == call back function : 10
            // answer 3 st time button click == call back function : 15
        })
        console.log(" this normal : "+this.state.count)
        // answer 1 st time button click == this normal : 0
        // answer 2 st time button click == this normal : 5
        // answer 3 st time button click == this normal : 10
    }

    // -----------------------------------------------------------------------------------------------------
    incrementPrevStateAndProps(){
        this.setState((prevState,props)=>({
            // meken prevState and second value props eka

            count:prevState.count as number + props.addValue as number


        }),()=>{
            console.log("call back function : "+this.state.count)
            // answer 1 st time button click == call back function : 3
            // answer 2 st time button click == call back function : 6
            // answer 3 st time button click == call back function : 9
        })
        console.log(" this normal : "+this.state.count)
        // answer 1 st time button click == this normal : 0
        // answer 2 st time button click == this normal : 3
        // answer 3 st time button click == this normal : 6
    }

    // -----------------------------------------------------------------------------------------------------
    incrementFive(){
        // this.increment();
        // this.increment();
        // this.increment();
        // this.increment();
        // this.increment();
    }

    render() {
        return (
            <div>
                <div className="messagePane">
                    <h1>count {this.state.count} </h1>
                </div>
                <div className='messagePane'>
                    <button onClick={() => this.incrementPrevStateAndProps()}>count</button>
                </div>
            </div>
        );
    }
}

export default Counter;