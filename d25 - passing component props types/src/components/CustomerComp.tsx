import React from 'react';
import ItemComp from "./ItemComp";
import itemComp from "./ItemComp";

interface MyProps{
    itemComp?:React.ComponentProps<typeof ItemComp>
}

class CustomerComp extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);

    }

    componentDidMount() {
        // apita eka component ekaka thiyana props types anith componet ekakata access karanna one nam mehema krnn puluwan
        console.log(typeof this.props.itemComp?.isLoginComp)
    }

    render() {


        return (
            <div>

            </div>
        );
    }
}

export default CustomerComp;