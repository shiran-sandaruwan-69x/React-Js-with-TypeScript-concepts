import React from 'react';

interface MyProps{
    children:any
}
interface MyState{
    hasError:boolean
}

class ErrorBoundary extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error:Error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
      if (this.state.hasError){
          return <h1>something went wrong !</h1>
      }
      return this.props.children
    }
}

export default ErrorBoundary;