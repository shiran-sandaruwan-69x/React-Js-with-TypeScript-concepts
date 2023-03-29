import React from 'react';

interface MyProps{
    cusId:string
}
interface MyState{}

class PureComp extends React.PureComponent<MyProps,MyState> {


    constructor(props: Readonly<any> | any) {
        super(props);
    }

// pure Component eka parai dom ekata render wenne ai eka update wenne na componentDidMount eka parai

    render() {
        console.log("pure component render")
        return (
            <div>
                <h1>pure component</h1>
            </div>
        );
    }
}

export default PureComp;