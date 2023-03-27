import React from 'react';
import '../css/message.css'
interface MyProps{
    name:string
    heroName:string
}

interface State1{
    cusId:string

}

interface State2{
    cusName:string
}

class Props extends React.Component<MyProps,State1,State2/*methanata state2 eka danma kiyla wadak na generic*/> {
    // generic wada karanne 2 kai
    constructor(props:Readonly<any> | any) {
        super(props);
        this.state = {
            cusId:'C001'
        }
    }

    render() {
   // props eke thiyana ewai state eke thiyana element this keyword eka use karanne nathiwa access krnn puluwan

        const {name,heroName} = this.props
        const {cusId} = this.state

        return (
            <div className="messagePane">
                <h1>{name} {heroName}</h1>
                <h2>{cusId}</h2>
            </div>
        );
    }
}

export default Props;