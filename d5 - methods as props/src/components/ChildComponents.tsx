import React from 'react';

interface MyProps{
    greetParent:any
}


class ChildComponents extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*mekath wada / parent component eken arrow function ekak ne enne*/}
                <button onClick={this.props.greetParent}>click me 1</button>

                {/*apita child component ekata me vidihata arrow function eka use karala value yawanna puluwan*/}
                <button onClick={()=>{this.props.greetParent("child components !")}}>click me 2</button>

            </div>
        );
    }
}

export default ChildComponents;