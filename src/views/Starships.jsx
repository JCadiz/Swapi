import React, { Component } from 'react';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Starships extends Component{
    constructor(props){
        super(props);
        this.state= {
            sships: []  
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/starships')
          .then((response)=> {
            console.log(response)
            this.setState({sships: response.data.results})
          }).catch((error)=> {
            console.log(error)
          });
        }
    render(){
        var sships = this.state.sships.map(function(sship){
            return <div className="row pnt">
                    <div className="col-sm-4">
                        <div className="img" key={sship.id}>
                        <img src={'../../public/img/starships/pag-1/' + sship.name +'.png'} alt="image"/>
                        </div>
                    </div>
            <div className="col-sm-8">
                <h5 className="title">{sship.name}</h5>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Model: {sship.model}.</li>
                    <li className="list-group-item">Manufacturer: {sship.manufacturer}.</li>
                    <li className="list-group-item">Crew: {sship.crew}.</li>
                    <li className="list-group-item">Passengers: {sship.passengers}.</li>
                   </ul>  
            </div>
           </div>
        });
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <h2> Welcome Starships Page</h2>
                    <ul>
                    {sships}
                    </ul>
                </div>
            </div>
        );
    }
}
// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Starships;