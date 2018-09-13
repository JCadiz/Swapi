import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import star from '../star.svg';

class Navbar extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand-md navbar-dark navbar-toggler bg-dark">
            <a className="navbar-brand ml-0" href="/">
              <img src={star} className="ml-0" alt="star"/>
            </a>
            <button className="navbar-toggler mr-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-0">
                <li className="nav-item active"><Link to="/" className="nav-link  fuente " >Home</Link> </li>
                
                <li className="nav-item active"><Link to="/Characters" className="nav-link fuente"> Characters</Link></li>
                
                <li className="nav-item active"><Link to="/Planets" className="nav-link fuente"> Planets</Link></li>
                
                <li className="nav-item active"><Link to="/StarShips" className="nav-link fuente"> StarShips</Link></li>
              
                <li className="nav-item active"><Link to="/Ships" className="nav-link fuente"> Ships</Link></li>
              </ul> 
            </div>
          </nav>  
        );
    }
}

export default Navbar