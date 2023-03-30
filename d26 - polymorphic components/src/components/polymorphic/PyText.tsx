import React from 'react';

interface MyProps{
    size?: 'sm' | 'sl' | 'lg'
    color?: 'primary' | 'secondary'
    children?:React.ReactNode

    as?:React.ElementType
}

class PyText extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        const {size,children,color,as} =this.props

        const Component = as || 'div'

        return (
            // apita puluwan props eke ewanna html element ek mkd kiyla
            <Component className={`class-with-${size}-${color}`}>{children} good morning</Component>
        );
    }
}

export default PyText;