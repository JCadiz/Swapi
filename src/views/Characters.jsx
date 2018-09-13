import React, { Component } from 'react';
import '../css/home.css';
import '../css/characters.css';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';
import Esp from './subviews/Esp.jsx';
import Pla from './subviews/Pla.jsx';
import Films from './subviews/Films.jsx';

class Characters extends Component{
    constructor (props){
        super(props);
        this.state ={
          personajes:[],
          next:[],
          previous:[],
        }
      }
      componentWillMount(){
        axios.get('https://swapi.co/api/people')
        .then((response) => {
          this.setState({personajes: response.data.results})
          this.setState({next: response.data.next})
          this.setState({previous: response.data.previous})
        }).catch((error) => {
          console.log(error)
        })
      }
       nextV(next, e){
        axios.get(next).then((response) =>{
        this.setState({personajes: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
      }
      previousV(previous, e){
        axios.get(previous).then((response) =>{
        this.setState({personajes: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
      }
    render(){
        var Persons = this.state.personajes.map(function(personaje){
            return <div className="card col-3 mb-3 mx-3 mt-3 tarjeta" key={personaje.name.split(' ').join('_').toLowerCase()}>
                    <img className="card-img-top img-thumbnail img tarjeta" src={require('../img/personajes/' + personaje.name.split(' ').join('_').toLowerCase() + '.jpg')} alt={personaje.name.split(' ').join('_').toLowerCase()} />
                <div className="card-body">
                    <h4 className="card-title text-center">{ personaje.name }</h4>
                </div>
                <ul className="list-group">
                    <li>
                        <Esp species={personaje.species[0]}></Esp>
                    </li>
                    <li>
                        <Pla homeworld={ personaje.homeworld }></Pla>
                    </li>
                </ul>
                <button className="btn btn-link p5" data-toggle="modal" data-target={'#portafoliomodal'+personaje.name.split(' ').join('_').toLowerCase()}>
                    Films
                </button> 
            </div>;

           
                <div className="modal fade" id={'portafoliomodal'+personaje.name.split(' ').join('_').toLowerCase()} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content w-100">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel"> Participation of { personaje.name }:</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Films films={ personaje.films }> </Films>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary " data-dismiss="modal">Close </button>
                            </div>
                            </div>
                        </div>
                </div>;
        });
        return(
            <div>
                <Navbar/>
                
                    <div className="row">
                        <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                            {Persons}
                        </div>
                    </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary btn-dark m-3" onClick={e => this.previousV(this.state.previous, e)}
                    >Previous</button>
                    <button type="button" className="btn btn-primary btn-dark m-3" onClick={e => this.nextV(this.state.next , e)}
                    >Next</button>
                    </div>  
                </div>

            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Characters;