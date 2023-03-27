import React from 'react';

class FragmentDemo extends React.Component {
    render() {
        return (
            // <div>
            //     <h1>hello</h1>
            //     <p>bye</p>
            // </div>
            // apita return eke thiyana main <div></div> meka wenuwata  <React.Fragment> meka use krnn puluwan
            // meka dom eke penanne na
            // <React.Fragment>
            //     <h1>hello</h1>
            //     <p>bye</p>
            // </React.Fragment>

            // apita </React.Fragment> meka wenuwata <></> meka use karanna puluwan but key={} meka use krnn ba meka
            //athule
            <>
                <h1>hello</h1>
                <p>bye</p>
            </>

        );
    }
}

export default FragmentDemo;