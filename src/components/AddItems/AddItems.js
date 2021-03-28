import React , {Component } from 'react';
import './AddItems.css'
class AddItems extends React.Component{
    state={
        name:'',
        age:''
    }
    handleChange=(e)=>{

    this.setState({[e.target.id]:e.target.value })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value===""){
            return false
        }else{
        this.props.Additem(this.state)
        this.setState({
            name:'',
            age:''
        })
    }
    }
    render(){
        return (
            <div className>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} id='name' placeholder='enter your name' value={this.state.name}/>
                <input type="text" onChange={this.handleChange} id='age' placeholder='enter your age' value={this.state.age}/>
                <input className="btn btn-success" type="submit" />
                </form>
            </div>
        )
    }
}
export default AddItems;