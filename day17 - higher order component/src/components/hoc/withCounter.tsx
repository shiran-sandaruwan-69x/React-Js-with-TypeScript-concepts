import React from "react";

interface MyProps{
}
interface MyState{count:number}

const withCounter = (OriginalComponent:any) =>{
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
                return {count:prevState.count +1}
            })
        }

        render() {
            return <OriginalComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
            />;
        }
    }
    return WithCounterComp;
}

export default withCounter;