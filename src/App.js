import React ,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
import AddItems from './components/AddItems/AddItems'
import ToList from './components/TodoList/TodoList';
import {Route,Switch,Link,BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import Login from './components/login/login';
import Movies from './components/Movies/movies';
class App extends React.Component {
  state={
    items:[
      {id:1,name:'omar',age:27},
      {id:2,name:'ahmed',age:28},
      {id:3,name:'abdallah',age:29}

    ]
  }
  deleteItems=(id)=>{
    let items=this.state.items.filter((item) =>{
      return item.id !== id
    })
    this.setState({items})
    // let i=items.findIndex(item => item.id === id )
    // items.splice(i,1)
    // this.setState({items})
  }
  Additem=(item)=>{
    item.id=Math.random()
    let items=this.state.items
    items.push(item)
    this.setState({items})
  }
  render(){
    return (
      <div>
        <Router>

                
                
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<h2 className="navbar-brand" to="#">APP</h2>

<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto ">
    <li className="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/movie">Movies</Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/todo">Todo</Link>
    </li>
    
    </ul>
</div>
</div>
</nav>
<main className="container">
    <Switch>
    <Route path="/movie" component={Movies}/>
    <Route path="/login" component={Login}/>
    {/* <Route path="/todo" component={Todo}/> */}
    <Route path="/home" component={Home}/>
    
    </Switch>
   
</main>
</Router>
      <div  className="App container">
        <h1 className="text_center"> TODO App </h1>
        <ToList items={this.state.items} deleted={this.deleteItems}/>
        <AddItems Additem={this.Additem}/>
        </div>
      </div>
  );
}
}

export default App;
