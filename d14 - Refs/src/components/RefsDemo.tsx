import React from 'react';
import '../css/message.css'
class RefsDemo extends React.Component {
    private readonly inputRefs;

    constructor(props: Readonly<any> | any) {
        super(props);
        this.inputRefs = React.createRef<HTMLInputElement>()
    }
    componentDidMount() {
        this.inputRefs.current?.focus();
        console.log(this.inputRefs)
    }

    customerSave = ()=>{
        alert(this.inputRefs.current?.value)
    }
    render() {
        // component eka load unama cursor eka input feild ekata forcus wenna krnne mehemai
        return (
            <div>
                <input type="text" ref={this.inputRefs}/>
                <button onClick={this.customerSave}>click me</button>
            </div>
        );
    }
}

export default RefsDemo;