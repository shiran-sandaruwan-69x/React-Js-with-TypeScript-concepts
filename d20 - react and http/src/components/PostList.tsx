import React from 'react';
import axios from "axios";

interface MyProps{}
interface MyState{
    postData:[],
    errorMsg:string
}
class PostList extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<MyProps> | MyProps) {
        super(props);
        this.state={
            postData:[],
            errorMsg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                console.log(response.data)
                this.setState({
                    postData:response.data
                })
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMsg:'Error Retrieving Data!'})
            })
    }

    render() {

        const {postData,errorMsg} = this.state

        return (
            <div>
                **************************************** Data Retrieving ************************************************
                {
                    postData.length ? postData.map((post:any) => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        );
    }
}

export default PostList;