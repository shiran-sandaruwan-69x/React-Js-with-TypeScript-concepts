import React from "react";


interface MyProps{
}

interface MyState{

}

class B extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state ={
            userName:''
        }
        console.log('constructor B called !')
    }

    static getDerivedStateFromProps(props:any,state:any){
        console.log('getDerivedStateFromProps(props:any,state:any) B method invoked !')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount() B method invoked !')
    }
    render() {
        console.log('render() B method invoked !')
        return(
            <div>
                <h1>B method</h1>
            </div>
        )
    }


}

export default B;