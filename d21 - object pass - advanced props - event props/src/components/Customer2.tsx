import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";

interface MyProps{
    customerDTO:CustomerDTO
}
class Customer2 extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        const {customerDTO} = this.props
        return (
            <div>
                <h1>customer 2 page : {customerDTO.cusId} : {customerDTO.cusName} : {customerDTO.cusSalary}</h1>
            </div>
        );
    }
}

export default Customer2;