import React from 'react';

interface MyProps{
    children:React.ReactNode
}

class AletComp extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="alert alert-primary" role="alert">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default AletComp;