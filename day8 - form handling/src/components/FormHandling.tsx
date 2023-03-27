import React from 'react';
import '../css/message.css'

interface MyProps{
}

interface MyState{
    userName:string
    comment:string
    value:string
}

class FormHandling extends React.Component<MyProps,MyState> {

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state ={
            userName:'',
            comment:'',
            value:''
        }
    }

    userInput = (event:any)=>{
        this.setState({
            userName:event.target.value
        })
        console.log(this.state.userName)
    }

    textAreaInput = (event:any)=>{
        this.setState({
            comment:event.target.value
        })
        console.log(this.state.comment)
    }

    selectVehicle = (event:any)=>{
        this.setState({
            value:event.target.value
        })
        console.log(this.state.value)
    }

    handleSubmit =(event:any)=>{
        event.preventDefault()
        alert(`${this.state.userName} ${this.state.comment} ${this.state.value}`)

    }

    render() {

        return(
           <form onSubmit={this.handleSubmit}>

               <div>

                   <label>user name</label>
                   <input type="text" value={this.state.userName} onChange={this.userInput}/>

                   <label>comment</label>
                   <textarea value={this.state.comment} onChange={this.textAreaInput}></textarea>

                   <div>
                       <select value={this.state.value} onChange={this.selectVehicle}>
                           <option value="car">car</option>
                           <option value="bus">bus</option>
                           <option value="van">van</option>
                       </select>
                   </div>
               </div>
               <button type="submit">click me</button>
           </form>
       )
    }


}

export default FormHandling;