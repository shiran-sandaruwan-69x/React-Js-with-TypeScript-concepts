import React from 'react';
import UserDTO from "../dto/UserDTO";
import '../css/message.css'
import axios from "axios";
import ToDoDTO from "../dto/ToDoDTO";
import searchList from "./HOC";
import {brotliCompress} from "zlib";

interface MyProps {
    filterData:any
}

class ToDoList extends React.Component<MyProps> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
    }

    render() {
        const {filterData} =this.props
        return (
            <div className='todoList'>
                {
                    filterData.length === 0 ? <p>todo list not found</p> :
                        filterData.slice(0,10).map((todo:ToDoDTO)=>{
                            return(
                               <div>
                                   <p key={todo.id}>{todo.title}</p>
                                   <br/>
                               </div>
                            )
                        })
                }

            </div>
        );
    }
}

export default searchList(ToDoList,'todos');