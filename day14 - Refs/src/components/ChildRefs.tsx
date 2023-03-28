import React from 'react';


interface MyProps{

}

interface MySate{}
class ChildRefs extends React.Component<MyProps,MySate> {

    inputRefs;

    constructor(props: Readonly<any> | any) {
        super(props);
        this.inputRefs=React.createRef<any>()
    }

    inputRefsMethod() {
        this.inputRefs.current?.focus()
        return this.inputRefs.current?.value
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRefs}/>
            </>
        );
    }
}

export default ChildRefs;