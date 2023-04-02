import React from 'react';
import {Simulate} from "react-dom/test-utils";
import compositionStart = Simulate.compositionStart;

interface MyProps{
    onSelectedItem: (item:string)=> void
}
interface MyState{
   list:string[]
}
class ListGroup2 extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            list:['cake','apple','mango','banana','pine apple']
        }
    }

    render() {
        const {list} = this.state
        const {onSelectedItem} = this.props

        return (
            <>
                <h1>List 2</h1>
                <ul className="list-group">
                    {
                        list.length ===0 || list === null ? <p>no items</p> :
                            this.state.list.map((item:string,index:number)=>{
                                return (
                                    <li data-id={index} key={index}
                                        className={"list-group-item"}
                                        onClick={()=>{

                                            onSelectedItem(item)
                                        }}
                                    >
                                        {item}
                                    </li>
                                )
                            })
                    }

                </ul>
            </>
        );
    }
}

export default ListGroup2;