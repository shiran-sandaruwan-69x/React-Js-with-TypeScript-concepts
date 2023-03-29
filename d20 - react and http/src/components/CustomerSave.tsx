import React from 'react';
import axios from "axios";

interface MyProps{}
interface MyState{
    userId?:string
    title?:string
    body?:string
}
class CustomerSave extends React.Component<MyProps,MyState> {
    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler =(e:any)=>{
        this.setState(
            {[e.target.name] : e.target.value
        })
    }

    submitHandler =(e:any)=>{
        e.preventDefault()
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render() {

        const {userId,body,title} = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='userId' value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name='title' value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name='body' value={body} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <button type='submit'>save customer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerSave;