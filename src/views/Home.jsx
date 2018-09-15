import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          this.setState({movies: response.data.results})
        }).catch((error) => {
          console.log(error)
        })
      }
    render(){
        var films = this.state.movies.map(function(movie){
            return <div className="jumbotron jumbotron-fluid p-3 mt-3 w-100 bg-dark imag" key={movie.episode_id}>
                    <div className="col-md-12 d-flex flex-row flex-wrap justify-content-around ">
                        <div className="col-md-6 col-sm-12 d-flex flex-column w-50" id='#bloque'>
                            <h1 className=" text-sm mb-4">episode { movie.episode_id }: { movie.title } </h1>
                            <p className="lead text-sm text-justify p">{ movie.opening_crawl }</p>
                            <p className="text-sm p">Director: { movie.director }</p> 
                            <p className="text-sm p">Productor: { movie.producer }</p>   
                            <p className="text-sm p">Fecha de Lanzamiento: { movie.release_date } </p> 
                            <p className="lead">
                            <Link to={{
                            pathname: "/movie/"+movie.title.split(' ').join('-').toLowerCase(),
                            state: {
                                url: movie.url,
                            }
                        }} className="btn btn-primary">
                           More Info
                        </Link>
                            </p>
                        </div>
                       
                            <figure className="">
                                <img src={require('../img/peliculas/' + movie.title.split(' ').join('_').toLowerCase()+ '.jpg')} 
                                alt={movie.title} className="img-fluid fotos mt-5" />
                            </figure> 
                    </div>
                </div>
          });
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
                                    <h3 className="display-4">Find the Synopsis of your Favorite Star War Movie</h3>
                                    </div>
                                    <img className="d-block w-100 m-0 p-0 imgHome" src={require('../img/carusel2.jpg')} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 m-0 p-0 imgHome" src={require('../img/carusel1.jpg')} alt="Second slide"/>
                                    <div className="carousel-caption flexbox-container">
                                    <h3 className="display-4">be a big fan of Star Wars just here</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 m-0 p-0 imgHome" src="../img/carusel1.jpg" alt="Third slide"/>
                                    <div className="carousel-caption flexbox-container">
                                    <h3 className="display-4">learn, discover everything on our Website .</h3>
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
               
                <div className="row ">
                    <div className="col-12 m-0 p-0 ">
                
                    {films}

                    </div>
                </div>

            </div>
        </div>
        );
    }
}

// comando para linea de comentarios ctrl + shift + boton de borrar 
export default Home;