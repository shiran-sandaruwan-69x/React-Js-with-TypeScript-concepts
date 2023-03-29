import React from 'react';
import '../css/message.css'

interface MyProps {

}

interface MyState {
    isLoggedIn: boolean
}

class UserCondition extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            isLoggedIn: true
        }

    }

    render() {
        // apita render method eka athule condition dannath puluwan
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //             <h1>welcome</h1>
        //         </div>
        //     )
        // }else {
        //     return(
        //         <div>
        //             <h1>bye</h1>
        //         </div>
        //     )
        // }

        //-------------------------------- 2 nd vidiha---------------------------------------------

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div ><h1>welcome</h1></div>
        // } else {
        //     message = <div><h1>bye</h1></div>
        // }
        // return message;

        //-------------------------------- 3 rd vidiha---------------------------------------------

        // return (
        //     this.state.isLoggedIn ?
        //         ( <div><h1>welcome</h1></div> ) :
        //         ( <div><h1>bye</h1></div> )
        // )

        //-------------------------------- 4 th vidiha---------------------------------------------
        // mekedi true eka vitharak ona unama meka puluwan

        return this.state.isLoggedIn && (<div><h1>wel come</h1></div>)

    }
}

export default UserCondition;