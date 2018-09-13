import React, { Component } from 'react';
import axios from 'axios';
import '../css/home.css';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';



class Home extends Component{
    constructor (props){
        super(props);
        this.state ={
          movies:[]
        }
      }
      componentWillMount(){
        axios.get('https://swapi.co/api/films')
        .then((response) => {
          console.log(response)
          this.setState({movies: response.data.results})
        }).catch((error) => {
          console.log(error)
        })
      }
    render(){
        var films = this.state.movies.map(function(movie){
            return <li key={movie.episode_id}> { movie.title }</li>
          }) 
        return(
            <div>
                <Navbar/>
                <div className="container-fluid m-0 p-0">
                    <div className="row">
                        <div className="col-12 m-0 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide m-0 p-0 cover" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner  ">
                                <div className="carousel-item active">
                                    <div className="carousel-caption flexbox-container ">
                                    <h2 className="display-5">Find the Synopsis of your Favorite Star War Movie</h2>
                                    </div>
                                    <img className="d-block w-100 m-0 p-0 imgHome" src={require('../img/carusel2.jpg')} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 m-0 p-0 imgHome" src={require('../img/carusel1.jpg')} alt="Second slide"/>
                                    <div className="carousel-caption flexbox-container">
                                    <h2 className="display-5">be a big fan of Star Wars just here</h2>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 m-0 p-0 imgHome" src="../img/carusel1.jpg" alt="Third slide"/>
                                    <div className="carousel-caption flexbox-container">
                                    <h2 className="display-5">learn, discover everything on our Website .</h2>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                    </div> 
                </div>

                <ul>
                    {films}
                </ul>

            </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Home;