import React from 'react';
import ReactDOM from "react-dom";

class PortalDemo extends React.Component {
    render() {
        return ReactDOM.createPortal(
           <h1>portal demo</h1>,
           document.getElementById('portal-root') as HTMLElement
        );
    }
}

export default PortalDemo;