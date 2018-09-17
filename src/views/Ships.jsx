import React, { Component } from 'react';
import axios from 'axios';
import '../css/planets.css';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Ships extends Component{
    constructor (props){
        super(props);
        this.state ={
          naves:[],
          next:[],
          previous:[],
        }
      }
      componentWillMount(){
        axios.get('https://swapi.co/api/vehicles')
        .then((response) => {
          this.setState({naves: response.data.results})
          this.setState({next: response.data.next})
          this.setState({previous: response.data.previous})
        }).catch((error) => {
          console.log(error)
        })
      }
      nextV(next, e){
        axios.get(next).then((response) =>{
        this.setState({naves: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
      }
      previousV(previous, e){
        axios.get(previous).then((response) =>{
        this.setState({naves: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
      }
    render(){
        var vehicles = this.state.naves.map(function(nave){
            return <div className="col-3 card-body mb-3 mx-3 mt-3 tarjeta" key={nave.name.split(' ').join('_').toLowerCase()}>
                        <img className="card-img-top img-thumbnail tarjeta" src={require('../img/vehicles/' + nave.model.split(" ").join("-").split("/").join("-").toLowerCase()+'.png')}  alt={nave.model.split(" ").join("-").split("/").join("-").toLowerCase()}/>
                    <div className="card">
                        <h4 className="card-title text-center">{ nave.name }</h4>
                   
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Model: </strong>{nave.model}.</li>
                        <li className="list-group-item"><strong>Manufacturer: </strong>{nave.manufacturer}.</li>
                        <li className="list-group-item"><strong>Length: </strong>{nave.length}m.</li>
                        <li className="list-group-item"><strong>Crew: </strong>{nave.crew}.</li>
                        <li className="list-group-item"><strong>Passengers: </strong>{nave.passengers}.</li>
                        <li className="list-group-item"><strong>Vehicle class: </strong>{nave.vehicle_class}.</li> 
                    </ul>
                  </div>
                </div>
          }) 
        return(
            <div>
                <Navbar/>
                

                <div className="row">
                    <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                        {vehicles}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary btn-dark m-3" onClick={e => this.previousV(this.state.previous, e)}
                    disabled={ this.state.previous == null } >Previous</button>
                    <button type="button" className="btn btn-primary btn-dark m-3" onClick={e => this.nextV(this.state.next , e)}
                    disabled={ this.state.next == null } >Next</button>
                    </div>  
                </div>

            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Ships;