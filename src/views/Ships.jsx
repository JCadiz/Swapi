import React, { Component } from 'react';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Ships extends Component{
    constructor(props){
        super(props);
        this.state= {
            ships: []  
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/vehicles/')
          .then((response)=> {
            console.log(response)
            this.setState({ships: response.data.results})
          }).catch((error)=> {
            console.log(error)
          });
        }
    render(){
        
        var ships = this.state.ships.map(function(ship){
            
            return <div className="row pnt">
                    <div className="col-sm-4">
                        <div className="img" key={ship.id}>
                        <img src={"./img/vehicles/" + ship.model.split(" ").join("-").split("/").join("-").toLowerCase()+".png"}  alt={ship.model.split(" ").join("-").split("/").join("-").toLowerCase()}/>
                        </div>
                    </div>
            <div className="col-sm-8 txt-ship">
                <h5 className="title">{ship.name}</h5>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Model: {ship.model}.</li>
                    <li className="list-group-item">Manufacturer: {ship.manufacturer}.</li>
                    <li className="list-group-item">Length: {ship.length}m.</li>
                    <li className="list-group-item">Crew: {ship.crew}.</li>
                    <li className="list-group-item">Passengers: {ship.passengers}.</li>
                    <li className="list-group-item">Vehicle class: {ship.vehicle_class}.</li>
                    
                   </ul>  
            </div>
           </div>
        });
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h2> Welcome Ships Page</h2>
                    <ul>
                    {ships}
                    </ul>
                </div>
            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Ships;