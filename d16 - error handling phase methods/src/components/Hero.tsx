import React from 'react';

interface MyProps{
    heroName:string
}
class Hero extends React.Component<MyProps> {
    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {

        if (this.props.heroName === 'joker'){
            throw new Error('joker error')
        }

        return (
            <div>
                <h1>{this.props.heroName}</h1>
            </div>
        );
    }
}

export default Hero;