import React from 'react';
import '../css/message.css'

interface MyProps{

}

interface MyState{
    message:string
}

class BindingEvent extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state={
            message:'hello'
        }
        this.customerSave=this.customerSave.bind(this);
    }

    customerSave(){
        this.setState({
            message:'good bye'
        })
    }

    customerSaveWithArrowFunction = () => {
        this.setState({
            message:'good bye'
        })
   }

    render() {
        return (
            <div className="messagePane">

                <h1>{this.state.message}</h1>

                {/* 1 st vidiha wada karanne na this.setState ekata this key word eka hoya gnn bari nisa*/}
                <button onClick={this.customerSave}>click me 1</button>

                {/* 2 nd mekedi this key word eka event ekata bind karala nisa wada*/}
                <button onClick={this.customerSave.bind(this)}>click me 2</button>

                {/* 3 rd ekedi constructor eke event eka bind karala this key word ekata wada krnn puluwan */}
                <button onClick={this.customerSave}>click me 3</button>

                {/*arrow function eka use karala method hadagena event bind karanna puluwan*/}
                <button onClick={this.customerSaveWithArrowFunction}>click me 4</button>

            </div>
        );
    }
}

export default BindingEvent;