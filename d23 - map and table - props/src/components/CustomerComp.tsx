import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";
import ItemDTO from "../dto/ItemDTO";
import ListComp from "./ListComp";

interface MyProps{}
interface MyState{
    cusData: CustomerDTO[],
    itemDTO:ItemDTO[]
}
class CustomerComp extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            cusData:[],
            itemDTO:[]
        }
    }

    componentDidMount() {
        let cusData=[
            {
                cusId: 'C001',
                cusName: 'shiran',
                cusSalary: 12233
            },
            {
                cusId: 'C002',
                cusName: 'kamal',
                cusSalary: 1111
            },
            {
                cusId: 'C003',
                cusName: 'ruwan',
                cusSalary: 2222
            }
        ]
        let itemDTO=[
            {
                itemId:"I001",
                itemName:"kadala",
                orderDTO:[
                    {
                        orderId:"O001",
                        orderQty:'2kg'
                    },
                    {
                        orderId:"O001",
                        orderQty:'3kg'
                    },
                    {
                        orderId:"O001",
                        orderQty:'4kg'
                    }
                ]
            },
            {
                itemId:"I002",
                itemName:"rice",
                orderDTO:[
                    {
                        orderId:"O002",
                        orderQty:'22kg'
                    },
                    {
                        orderId:"O002",
                        orderQty:'33kg'
                    },
                    {
                        orderId:"O002",
                        orderQty:'44kg'
                    }
                ]
            },
            {
                itemId:"I003",
                itemName:"banana",
                orderDTO:[
                    {
                        orderId:"O003",
                        orderQty:'20kg'
                    },
                    {
                        orderId:"O003",
                        orderQty:'30kg'
                    },
                    {
                        orderId:"O003",
                        orderQty:'40kg'
                    }
                ]
            }
        ]
        this.setState({
            cusData:cusData,
            itemDTO:itemDTO
        })
    }


    render() {
        return (
            <div>

                <table>
                    <tr>
                        <th>customer Id</th>
                        <th>customer name</th>
                        <th>customer salary</th>
                    </tr>
                    {
                        <ListComp
                            cusData={this.state.cusData}
                            itemDTO={this.state.itemDTO}
                        />
                    }
                </table>



            </div>
        )
    }
}

export default CustomerComp;