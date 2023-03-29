import React from 'react';

class Columns extends React.Component {
    render() {

        const items:any=['kamal']

        return (
            // <React.Fragment>
            //     {
            //         items.map((item:any,index:number)=>
            //             <React.Fragment key={index}>
            //                 <h1>title</h1>
            //                 <h2>item</h2>
            //             </React.Fragment>
            //         )
            //     }


            //     <td>kamal</td>
            //     <td>amara</td>
            //     <td>sunil</td>
            // </React.Fragment>

        // apita </React.Fragment> meka wenuwata <></> meka use karanna puluwan but key={} meka use krnn ba meka
        //athule
        <>
            <td>kamal</td>
            <td>amara</td>
            <td>sunil</td>
        </>

        );
    }
}

export default Columns;