import React from 'react';

interface MyProps{

}

interface MyState{
    cusName:string[]
}

class KeyIndex extends React.Component<MyProps,MyState> {


    constructor(props: Readonly<any> | any) {
        super(props);
        this.state ={
            cusName:['kamal','amara','sunil','kamal']
        }
    }

    render() {
        // apita eka wage dekak array eke thiboth uniq id ekakata danna Key ekata me index ek use krnn puluwan
        return this.state.cusName.map((names:string,index:number) => <h1 key={index}> {index} : {names} </h1>)
    }
}

export default KeyIndex;