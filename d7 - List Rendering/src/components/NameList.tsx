import React from 'react';
import '../css/message.css'
import CustomerDTO from "../dto/CustomerDTO";
import NameListChild from "./NameListChild";

interface MyProps {

}

interface MyState {
    customerDTO:CustomerDTO[]
}

class NameList extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            customerDTO:[
                {
                    cusId:'C001',
                    cusName:'shiran',
                    cusSalary:1234
                },
                {
                    cusId:'C002',
                    cusName:'kamal',
                    cusSalary:1234
                },
                {
                    cusId:'C003',
                    cusName:'amara',
                    cusSalary:1211
                }
            ]
        }

    }



    render() {
        // meka 1 st vidiha

       // return(
       //     <div>{this.state.customerDTO.map((customer:CustomerDTO)=>
       //         <h1>customer id is : {customer.cusId} | customer name is : {customer.cusName} | salary : {customer.cusSalary}</h1>)}
       //     </div>
       // )

        // 2 nd vidiha

        // let nameList = this.state.customerDTO.map(customer => <h1>customer id is : {customer.cusId} | customer name is : {customer.cusName} | salary : {customer.cusSalary}</h1>)
        // return nameList;

        // passed child components

         let nameList = this.state.customerDTO.map(customer=> <NameListChild key={customer.cusId} childData={customer}/>)
        return nameList
    }
}

export default NameList;