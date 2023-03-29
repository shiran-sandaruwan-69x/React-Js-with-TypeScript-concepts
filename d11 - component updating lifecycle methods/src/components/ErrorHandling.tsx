import React from 'react';

class ErrorHandling extends React.Component {

    static getDerivedStateFromError(error:Error) {
        // Changing the state to true if some error occurs
        return {
            error: true,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log('componentDidCatch')
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ErrorHandling;