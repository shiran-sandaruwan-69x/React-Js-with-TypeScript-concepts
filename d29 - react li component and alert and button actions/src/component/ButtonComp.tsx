import React from 'react';
import AlertNewComp from "./AlertNewComp";

interface MyProps{
    color?:'primary' | 'secondary' | 'success'
}

interface MyState{
    alertVisible:boolean
}
class ButtonComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            alertVisible:false
        }
    }

    alertVisibility=(visible:boolean)=>{
        this.setState({
            alertVisible:visible
        })
    }

    render() {
        let {alertVisible} = this.state
        return (
            <div>
                {alertVisible && <AlertNewComp onClose={()=>this.alertVisibility(false)}/>}
                <button type="button" className={`btn btn-${this.props.color}`}
                onClick={()=>{this.alertVisibility(true)}}
                >
                    {this.props.color}
                </button>
            </div>
        );
    }
}

export default ButtonComp;