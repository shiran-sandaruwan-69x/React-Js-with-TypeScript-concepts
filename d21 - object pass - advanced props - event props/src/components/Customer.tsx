import React from 'react';

interface CustomerProps {
    customerDTO:{
        cusId:string,
        cusName:string
    }
}

interface MyState {
}


class Customer extends React.Component<CustomerProps, MyState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>customer page : {this.props.customerDTO.cusId} : {this.props.customerDTO.cusName}</h1>
            </div>
        );
    }
}

export default Customer;