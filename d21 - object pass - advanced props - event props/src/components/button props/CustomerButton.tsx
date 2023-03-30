import React from 'react';

interface MyProps{
    customerSaveEvent?:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
class CustomerButton extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        const {customerSaveEvent} = this.props
        return (
            <div>
                <button onClick={customerSaveEvent}>click me to see</button>
            </div>
        );
    }
}

export default CustomerButton;