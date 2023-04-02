import React from 'react';

interface MyProps{
    onClose:any
}
class AlertNewComp extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="alert alert-primary alert-dismissible" role="alert">
                    A simple primary alert—check it out!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                            onClick={this.props.onClose}
                    ></button>
                </div>
            </div>
        );
    }
}

export default AlertNewComp;