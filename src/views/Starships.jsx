import React, { Component } from 'react';
import axios from 'axios';
import '../css/planets.css';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Starships extends Component{
    constructor (props){
        super(props);
        this.state ={
          cruceros:[],
          next: [],
          previous: []
        }
      }
      componentWillMount(){
        axios.get('https://swapi.co/api/starships')
        .then((response) => {
          this.setState({cruceros: response.data.results})
          this.setState({next: response.data.next})
          this.setState({previous: response.data.previous})
        }).catch((error) => {
          console.log(error)
        })
      }
      nextV(next, e){
        axios.get(next).then((response) =>{
            this.setState({cruceros: response.data.results})
            this.setState({next: response.data.next})
            this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
       }
    previousV(previous, e){
      axios.get(previous).then((response) =>{
        this.setState({cruceros: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
    }).catch(error => {
      console.log(error)
     });

    }
    render(){
        var Estelares = this.state.cruceros.map(function(crucero){
            return <div className="col-3 card-body mb-3 mx-3 mt-3 tarjeta" key={crucero.name.split(' ').join('_').toLowerCase()}>
                        <img className="card-img-top img-thumbnail tarjeta" src={require('../img/starships/' + crucero.model.split(" ").join("-").split("/").join("-").toLowerCase()+ '.png')}  alt={crucero.model.split(" ").join("-").split("/").join("-").toLowerCase()}/>
                        <div className="card">
                            <h4 className="card-title text-center">{ crucero.name }</h4>
                       
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Model: </strong>{crucero.model}.</li>
                            <li className="list-group-item"><strong>Manufacturer: </strong>{crucero.manufacturer}.</li>
                            <li className="list-group-item"><strong>Crew: </strong>{crucero.crew}.</li>
                            <li className="list-group-item"><strong>Passengers: </strong>{crucero.passengers}.</li>
                        </ul>
                    </div>
                </div>
          }) 
        return(
            <div>
                <Navbar/>

                <div className="row">
                    <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                        {Estelares}
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
export default Starships;