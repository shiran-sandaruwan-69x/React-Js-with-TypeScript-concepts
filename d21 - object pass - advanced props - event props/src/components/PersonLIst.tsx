import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";
import ChildCustomer from "./ChildCustomer";

interface MyProps{
    customerDTOList:CustomerDTO []
}
class PersonLIst extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    customerSomeDetails():number{
        let x:number=10;
        let y:number=20;
        let sum:number=x+y;
        return sum;
    }

    render() {
        const {customerDTOList} =this.props
        return (
            <div>
                {
                    customerDTOList.map(customer=>{
                        return(
                            <h1>{customer.cusId} : {customer.cusName} : {customer.cusSalary}</h1>
                        )
                    })
                }
                <ChildCustomer customerDTOList={customerDTOList} customerSomeDetails={this.customerSomeDetails()}/>
            </div>
        );
    }
}

export default PersonLIst;