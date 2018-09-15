import React, { Component } from 'react';
import axios from 'axios';
import Films from './subviews/Films.jsx';

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

        this.getDetailCharacter(this.state.url);
    }

    getDetailCharacter = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                this.setState({ 
                    film: response.data, 
                    characters: response.data.films 
                });
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        //console.log(this.state.characters);
        let film = this.state.characters.map((url) => {
            return <Films url={url} key={url} />;
        });        
        return ( 
            <div>
                 <Navbar/>
                    <h1 className="text-center my-5 color">
                        <strong>Character Detail</strong>{ this.state.film.name }
                    </h1>

                        { film }

                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                    <Link type="button" className="btn btn-primary m-3" to="/" >Go Back</Link>
                    </div>  
                </div>
            </div>
        );
    }
}

export default MovieDetails;