import React, {Fragment,MouseEvent} from 'react';

interface MyProps{}
interface MyState{
    selectedIndex:number
}

class ListGroups extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            selectedIndex:-1
        }
    }

    ListItems=()=>{
        let list=['cake','apple','mango','banana','pine apple']

        return list;
    }

    handleEvent=(event:MouseEvent)=>{
        console.log(event.target)
    }


    render() {
        const {selectedIndex} =this.state
        return (
            <Fragment>
                <h1>List 1</h1>

                <ul className="list-group">
                    {
                        // mekath condition check karanna use karanna puluwan meka true unoth no items print wenne
                        // this.ListItems().length ===0 && <p>no items</p>
                    }
                {

                    this.ListItems().length ===0 || this.ListItems() ===null ? <p>no items</p> :
                        this.ListItems().map((item:string,index:number)=>{
                            return (
                                <li data-id={index} key={index}
                                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                                    onClick={()=>{
                                        this.setState({
                                            selectedIndex:index
                                        })
                                    }}
                                >
                                    {item}
                                </li>
                            )
                        })
                }
                </ul>
            </Fragment>
        );
    }
}

export default ListGroups;