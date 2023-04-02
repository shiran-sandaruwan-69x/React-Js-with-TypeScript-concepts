import React from 'react';
import Message from "./component/Message";
import ListGroups from "./component/ListGroups";
import ListGroup2 from "./component/ListGroup2";
import AletComp from "./component/AletComp";
import ButtonComp from "./component/ButtonComp";

class App extends React.Component {

    selectedItem=(item:string)=>{
        console.log(item)
    }

    render() {
        return (
            <div>
                {/*<ListGroups/>*/}
                {/*<ListGroup2 onSelectedItem={this.selectedItem}/>*/}
                {/*<AletComp >*/}
                {/*    <h1>hello</h1>*/}
                {/*    <h3>how are you</h3>*/}
                {/*</AletComp>*/}
                <ButtonComp color={'success'}/>
            </div>
        );
    }
}

export default App;