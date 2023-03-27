import React from 'react';
import NameList from "./NameList";
import nameList from "./NameList";
import CustomerDTO from "../dto/CustomerDTO";

interface MyProps{
    childData:CustomerDTO
}
class NameListChild extends React.Component<MyProps>{

    constructor(props: Readonly<any> | any) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.childData)
    }

    render() {
        return (
            <div>
                <h1>customer id is : {this.props.childData.cusId} | customer name is : {this.props.childData.cusName} | salary : {this.props.childData.cusSalary}</h1>
            </div>
        );
    }
}

export default NameListChild;