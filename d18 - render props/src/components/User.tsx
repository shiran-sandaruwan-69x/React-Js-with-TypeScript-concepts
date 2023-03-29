import React from 'react';

interface MyProps{userName:any}
interface MyState{}
class User extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={}
    }

    render() {
        return (
            <div>{this.props.userName(false)}</div>
        );
    }
}

export default User;