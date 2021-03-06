import React from 'react';
import {Link} from 'react-router-dom'


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="#">NetFlix</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
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
         );
    }
}
 
 
export default NavBar;