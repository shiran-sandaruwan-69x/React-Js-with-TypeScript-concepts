import React from 'react';
import CustomerButton from "./CustomerButton";


class CustomerBtnEvent extends React.Component {

    customerSaveEvent =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        alert('hello there ....!')
    }

    render() {
        return (
            <div>
                <CustomerButton customerSaveEvent={this.customerSaveEvent} />
            </div>
        );
    }
}

export default CustomerBtnEvent;