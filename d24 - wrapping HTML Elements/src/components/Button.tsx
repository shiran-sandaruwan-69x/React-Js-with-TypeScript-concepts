import React from 'react';

interface MyProps{
    colorBtn:any,
    variant: 'primary' | 'secondary',
    children:any,
    onClick:() => void
}
interface MyState{}
class Button extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.onClick}
                    className={`class-with-${this.props.variant}`}
                    style={{backgroundColor:`${this.props.colorBtn}`}}
                >
                    click me to change color {this.props.children}
                </button>
            </div>
        );
    }
}

export default Button;