import React, { Component } from 'react';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Planets extends Component{
    constructor(props){
        super(props);
        this.state= {
            planets: []
            
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/planets')
          .then((response)=> {
            console.log(response)
            this.setState({planets: response.data.results})
          }).catch((error)=> {
            console.log(error)
          });
        }
    render(){
        var planet = this.state.planets.map(function(plan){
            return <div className="row pnt">
                    <div className="col-sm-4">
                        <div className="img" key={plan.id}>
                        <img src={'../img/planets/pag-1/' + plan.name +'.png'} alt="image"/>
                        </div>
                    </div>
            <div className="col-sm-8">
                <h5 className="title">{plan.name}</h5>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Diameter: {plan.diameter}km.</li>
                    <li className="list-group-item">Climate: {plan.climate}</li>
                    <li className="list-group-item">Terrain: {plan.terrain}</li>
                    <li className="list-group-item">Surface water: {plan.surface_water}cfs.</li>
                    <li className="list-group-item">Population: {plan.population} people.</li>
                   </ul>  
            </div>
           </div>
        });
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h2> Welcome Planets Page</h2>
                    <ul>
                    {planet}
                    </ul>
                </div>
            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Planets;