import React from 'react';
import ToDoDTO from "../dto/ToDoDTO";
import UserDTO from "../dto/UserDTO";
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

interface MyProps {
}

interface MyState {
    listData: [],
    inputName: string

}

const searchList = (WrappedComponent: any, urlType: string) => {

    return class extends React.Component<MyProps, MyState> {
        constructor(props: Readonly<MyProps> | MyProps) {
            super(props);
            this.state = {
                listData: [],
                inputName: ''
            }
        }

        componentDidMount() {
            const data = async () => {
                await axios({
                    url: `/${urlType}`,
                    method: 'GET',
                })
                    .then(response => {
                        this.setState({
                            listData: response.data
                        })
                        console.log(this.state.listData)
                    })
                    .catch(error => {
                        throw new Error(error)
                    })
            }
            return data()
        }


        render() {
            const {listData,inputName} = this.state
            const filterData =listData.filter((data:any)=>{
                if(urlType === "users"){
                    return data.name.toLowerCase().indexOf(inputName.toLowerCase()) >=0
                }
                if(urlType === "todos"){
                    return data.title.toLowerCase().indexOf(inputName.toLowerCase()) >=0
                }
            })

        return(
            <div>
                <br/>
                <label>input to search </label>
                <br/>
                <input type='text'
                       value={inputName}
                       onChange={(event)=>{
                           this.setState({
                               inputName:event.target.value
                           })
                       }
                       }
                />
                <br/>
                <br/>

                <WrappedComponent filterData={filterData}/>
            </div>
        )

        }

    }
}

export default searchList;