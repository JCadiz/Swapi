import React, { Component } from 'react';


//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Starships extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h2> Welcome Starships Page</h2>
                </div>
            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Starships;