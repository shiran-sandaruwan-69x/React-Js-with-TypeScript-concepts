import React from 'react';

class UnMounting extends React.Component {

    componentWillUnmount() {
        console.log('gg')
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default UnMounting;