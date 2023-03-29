import React from 'react';

interface MyProps {
    ref:any
}

class FrInput extends React.Component<MyProps> {

    constructor(props: Readonly<any> | any) {
        super(props);
    }

    render(){
        return(
            <input type="text" ref={this.props.ref}/>
        )
    }
}


export default React.forwardRef((props:any, ref:any) => <FrInput ref={ref} {...props}/>);