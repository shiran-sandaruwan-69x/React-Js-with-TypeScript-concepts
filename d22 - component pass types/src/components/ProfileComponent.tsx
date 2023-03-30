import React from 'react';
import LoginComp from "./LoginComp";
import LogOutComp from "./LogOutComp";

interface MyProps{
    component?:React.ComponentType<LoginComp> | any
}
interface MyState{
    isLogin:boolean
}
class ProfileComponent extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            isLogin:true
        }
    }

    render() {
    if (this.state.isLogin){
        return <this.props.component/>
    }else {
        return <LogOutComp/>
    }
    }
}

export default ProfileComponent;