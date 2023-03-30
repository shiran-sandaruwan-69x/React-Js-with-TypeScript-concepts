import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";

interface MyProps{
    customerDTOList:CustomerDTO [],
    customerSomeDetails:React.ReactNode
}
class ChildCustomer extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        const {customerDTOList,customerSomeDetails} =this.props
        let index:number=0
        return (
            <div>
                {
                    customerDTOList.map(customer=>{
                        return(
                            <>
                            <h1>******** child customer **** {index++}</h1>
                            <h3>{customer.cusId} : {customer.cusName} : {customer.cusSalary}</h3>
                            </>

                        )
                    })
                }
                <h2>sum is : {customerSomeDetails}</h2>
            </div>
        );
    }
}

export default ChildCustomer;