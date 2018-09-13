import React, { Component } from 'react';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Planets extends Component{
    constructor (props){
        super(props);
        this.state ={
          planetas:[],
          next:[],
          previous:[]
        }
      }
      componentWillMount(){
        axios.get('https://swapi.co/api/planets')
        .then((response) => {
          this.setState({planetas: response.data.results})
          this.setState({next: response.data.next})
          this.setState({previous: response.data.previous})
        }).catch((error) => {
          console.log(error)
        })
      }
      nextV(next, e){
        axios.get(next).then((response) =>{
        this.setState({planetas: response.data.results})
        this.setState({next: response.data.next})
        this.setState({previous: response.data.previous})
      }).catch(error => {
        console.log(error)
       });
       }
    previousV(previous, e){
      axios.get(previous).then((response) =>{
      this.setState({planetas: response.data.results})
      this.setState({next: response.data.next})
      this.setState({previous: response.data.previous})
    }).catch(error => {
      console.log(error)
     });
    }
    render(){
        var Planet = this.state.planetas.map(function(planeta){
            return <div className="card col-3 mb-3 mx-3 mt-3 tarjeta" key={planeta.name.split(' ').join('_').toLowerCase()}>
                    <img className="card-img-top img-thumbnail img tarjeta" src={require('../img/planets/' + planeta.name.split(" ").join("-").split("/").join("-")+ '.png')} alt={planeta.name.split(" ").join("-").split("/").join("-").toLowerCase()} />
                    
                    <div className="card-body">
                        <h4 className="card-title text-center">{ planeta.name }</h4>
                    </div>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Diameter:</strong> {planeta.diameter}km.</li>
                            <li className="list-group-item"><strong>Climate:</strong> {planeta.climate}</li>
                            <li className="list-group-item"><strong>Terrain:</strong> {planeta.terrain}</li>
                            <li className="list-group-item"><strong>Surface water:</strong> {planeta.surface_water} cfs.</li>
                            <li className="list-group-item"><strong>Population:</strong> {planeta.population} people.</li>
                        </ul>
                     </div>; 
          })
        return(
            <div>
                <Navbar/>
                

                <div className="row">
                    <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                        {Planet}
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
export default Planets;