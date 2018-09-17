import React, { Component } from 'react';
import axios from 'axios';
import Characters from './subviews/Personajes.jsx';

//importando los componentes de la pagina 
import Navbar from '../components/Navbar.jsx';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            film: {},
            characters: [],
            url: this.props.location.state.url,
        }

        this.getDetailFilm(this.state.url);
    }

    getDetailFilm = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                this.setState({ 
                    film: response.data, 
                    characters: response.data.characters 
                });
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        //console.log(this.state.characters);
        let characters = this.state.characters.map((url) => {
            return <Characters url={url} key={url} />;
        });        
        return ( 
            <div>
                 <Navbar/>
                    <h1 className="text-center my-5 color ">
                        <strong>Movie Detail Episode{ this.state.film.episode_id }: </strong>{ this.state.film.title }
                    </h1>

                        { characters }

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <Link type="button" className="btn btn-primary btn-dark m-3" to="/" >Go Back</Link>
                    </div>  
                </div>
            </div>
        );
    }
}

export default MovieDetails;