import React from 'react';
import axios from "axios";
import UserDTO from "../dto/UserDTO";
import '../css/message.css'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

interface MyProps {

}

interface MyState {
    userData:UserDTO[],
    name:string,

}

class UserList extends React.Component<MyProps, MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state = {
            userData:[],
            name:''
        }
    }



    componentDidMount() {
        axios({
            url: '/users',
            method: 'GET',
        })
        .then(response=>{
            this.setState({
                userData:response.data
            })
            console.log(this.state.userData)
        })
        .catch(error=>{
            throw new Error(error)
        })
    }

    filterUser=()=>{
        return this.state.userData.filter((user:UserDTO)=>{
            return user.name.toLowerCase().indexOf(this.state.name.toLowerCase()) >=0
        })
    }


    render() {
        return (
            <div className='UserList'>
              <label>input user name to search {}</label>
              <input type='text'
              value={this.state.name}
              onChange={(event)=>{
              this.setState({
                  name:event.target.value
              })
              }
              }
              />

                {
                   this.filterUser().length === 0 ? <p>user not found</p> :
                       this.filterUser().map((user:UserDTO)=>{
                        return(
                          <p key={user.id}>{user.name}</p>
                        )
                    })
                }

            </div>
        );
    }
}

export default UserList;
