import React from 'react';
import CustomerDTO from "../dto/CustomerDTO";
import ItemDTO from "../dto/ItemDTO";

interface MyProps{
    cusData:CustomerDTO[],
    itemDTO:ItemDTO[]
}
class ListComp extends React.Component<MyProps> {
    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <>
                {
                    this.props.cusData.map( (customer:CustomerDTO) =>{
                        return(
                            <>
                                <tr>
                                <td>{customer.cusId}</td>
                                <td>{customer.cusName}</td>
                                <td>{customer.cusSalary}</td>
                                </tr>
                            </>
                        )
                })
                }
            </>
        );
    }
}

export default ListComp;