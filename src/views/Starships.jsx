import React, { Component } from 'react';
import axios from 'axios';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';

class Starships extends Component{
    constructor(props){
        super(props);
        this.state= {
            sships: [],
            next: [],
            previous: [], 
          }
        }
        componentWillMount(){
            axios.get('https://swapi.co/api/starships/')
          .then((response)=> {
            console.log(response)
            this.setState({sships: response.data.results})
            this.setState({next: response.data.next})
            this.setState({previous: response.data.previous})
          }).catch((error)=> {
            console.log(error)
          });
        }
          nextV(next, e){
            axios.get(next).then((response) =>{
            this.setState({sships: response.data.results})
            this.setState({next: response.data.next})
            this.setState({previous: response.data.previous})
          }).catch(error => {
            console.log(error)
           });
           }
        previousV(previous, e){
          axios.get(previous).then((response) =>{
          this.setState({sships: response.data.results})
          this.setState({next: response.data.next})
          this.setState({previous: response.data.previous})
        }).catch(error => {
          console.log(error)
         });

        }
    render(){
        var sships = this.state.sships.map(function(sship){
            return <div className="col-3 card mb-3 mx-3 mt-3 tarjeta" key={sship.name.split(' ').join('_').toLowerCase()}>
            <img className="card-img-top img-thumbnail tarjeta" src={"./img/starships/" + sship.model.split(" ").join("-").split("/").join("-").toLowerCase()+".png"}  alt={sship.model.split(" ").join("-").split("/").join("-").toLowerCase()}/>
        <div className="card-body">
            <h4 className="card-title text-center">{ sship.name }</h4>
        </div>
        <ul className="list-group">
                    <li className="list-group-item">Model: {sship.model}.</li>
                    <li className="list-group-item">Manufacturer: {sship.manufacturer}.</li>
                    <li className="list-group-item">Crew: {sship.crew}.</li>
                    <li className="list-group-item">Passengers: {sship.passengers}.</li>
        </ul>
    </div>;
        });
        return(
            <div>
                <Navbar/>
    
                <div className="container" id="wtv">
                    <h2> Welcome the Starships page.</h2>
                </div>

                <section className="new_arrivals_area section_padding_100_0 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section_heading text-center">
                                    <h2> Starships </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                            {sships}
                        </div>
                    </div>
                </section>



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
export default Starships;