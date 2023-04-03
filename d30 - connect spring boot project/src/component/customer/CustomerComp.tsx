import React, {Fragment} from 'react';
import CustomerDTO from "../../dto/CustomerDTO";
import axios from "axios";


axios.defaults.baseURL = "http://localhost:8080/mySpringBootPos/api/customer/"

interface CustomerProps{}
interface CustomerState{
    cusDTO:CustomerDTO[],
    count:number

}
class CustomerComp extends React.Component<CustomerProps,CustomerState> {


    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
        this.state={
            cusDTO:[],
            count:0
        }
    }

    componentDidMount() {
        axios({
            method:'GET',
            url:'/getAllCustomers',
            responseType:'json'
        })
            .then((response)=>{
                console.log(response.data.data)
                this.setState({
                    cusDTO:response.data.data
                })
                // console.log(response)
            })
            .catch((error:Error)=>{
                console.log(error)
            })

    }


    render() {
        let {cusDTO,count} = this.state
        return (
            <Fragment>
                <table className="table table-dark table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">cus id</th>
                        <th scope="col">cus name</th>
                        <th scope="col">cus address</th>
                        <th scope="col">cus salary</th>
                    </tr>
                    </thead>

                    <tbody className="table-primary">
                        {
                            cusDTO.map((customer:CustomerDTO,index:number)=>{
                                return (
                                    <tr key={customer.cusId}>
                                        <td>{++count}</td>
                                        <td>{customer.cusId}</td>
                                        <td>{customer.cusName}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.salary}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </Fragment>
        );
    }
}

export default CustomerComp;