import React from "react";

interface MyProps{
}
interface MyState{count:number}

const withCounter = (WrappedComponent:any,incrementNumber:number) =>{
    class WithCounterComp extends React.Component<MyProps, MyState>{

        constructor(props: Readonly<MyProps> | MyProps) {
            super(props);
            this.state={
                count:0
            }
        }

        incrementCount =()=>{
            // prevState eke thiyana value eka mehema ara gena ekata ekk ekathu karnn puluwan
            this.setState(prevState =>{
                return {count:prevState.count + incrementNumber}
            })
        }

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                // mekena wenne app.js eken props wala deyak euwoth a tika meken copy karagena access share
                // karanawa me component eka use wena hama ekakatama
                {...this.props}
            />;
        }
    }
    return WithCounterComp;
}

export default withCounter;