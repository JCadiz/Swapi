import React, { Component } from 'react';


//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h2> Welcome Home Page</h2>
                </div>
            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Home;