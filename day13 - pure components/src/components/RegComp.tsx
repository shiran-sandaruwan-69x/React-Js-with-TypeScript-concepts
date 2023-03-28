import React from 'react';

interface MyProps{
    cusId:string
}
interface MyState{}

class RegComp extends React.Component<MyProps,MyState> {


    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        console.log("reg component render")
        return (
            <div>
                <h1>reg component</h1>
            </div>
        );
    }
}

export default RegComp;