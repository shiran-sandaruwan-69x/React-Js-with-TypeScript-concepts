import React from 'react';

class BComponent extends React.Component {


    constructor(props: Readonly<any> | any) {
        super(props);
        console.log('constructor B')
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('shouldComponentUpdate B')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): any {
        console.log('getSnapshotBeforeUpdate B')
        return null;
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('componentDidUpdate B')
    }


    render() {
        console.log('render() B')
        return (
            <div>
                <h1>B component</h1>
            </div>
        );
    }
}

export default BComponent;