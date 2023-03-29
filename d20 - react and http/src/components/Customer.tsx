import React from 'react';
import axios from "axios";

interface MyProps {
}

interface MyState {
}

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

class Customer extends React.Component<MyProps, MyState> {


    componentDidMount() {
        axios({
            method: 'GET',
            url: '/posts'
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Customer;