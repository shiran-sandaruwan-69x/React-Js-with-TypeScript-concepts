import React from 'react';
import RegComp from "./RegComp";
import PureComp from "./PureComp";

interface MyProps{

}
interface MyState{
    cusName:string
}

class ParentComp extends React.Component<MyProps,MyState> {


    constructor(props: Readonly<any> | any) {
        super(props);
        this.state={
            cusName:'kamal'
        }
    }

    componentDidMount() {

        let onSizeChangeSetInterval: ReturnType<typeof setInterval> | undefined;
        onSizeChangeSetInterval = setInterval(() => {
            this.setState({
                cusName:'kamal'
            })
        }, 3000);

    }

    render() {
        console.log("***************parent component***************")
        return (
            <div>
                <RegComp cusId={this.state.cusName}/>

                {/*pure Component eka parai dom ekata render wenne ai eka update wenne na componentDidMount eka parai*/}

                <PureComp cusId={this.state.cusName}/>
            </div>
        );
    }
}

export default ParentComp;