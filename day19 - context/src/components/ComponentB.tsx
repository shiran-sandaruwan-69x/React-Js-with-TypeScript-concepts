import React from 'react';
import ComponentC from "./ComponentC";
import UserContext from "./userContext";


class ComponentB extends React.Component {


   // apita user context eke thiyna ewa b walath access karanna one nam karann thiyanne
    static contextType = UserContext;
    context!: React.ContextType<typeof UserContext>;

    render() {
        return (
            <div>
                <h1>d{this.context}</h1>
                <ComponentC/>
            </div>
        )
    }
}

export default ComponentB;