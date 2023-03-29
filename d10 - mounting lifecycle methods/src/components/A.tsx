import React from 'react';

import B from "./B";

interface MyProps{
}

interface MyState{
    userName:string
}

class A extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state ={
            userName:''
        }
        console.log('constructor A !')
    }

    static getDerivedStateFromProps(props:any,state:any){
        console.log('getDerivedStateFromProps(props:any,state:any) A !')
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount() A !')
    }
    render() {
        console.log('render() A !')
        return(
           <div>
           <h1>A method</h1>
           <B/>
           </div>

       )
    }


}

export default A;