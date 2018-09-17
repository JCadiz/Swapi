import React, { Component } from 'react';
import axios from 'axios';

class Films extends Component {
    constructor(props){
        super(props);

        this.state = {
            character: {},
            url: this.props.url,
        }

        this.getDetailMovies(this.state.url);
    }

    getDetailMovies = (url) => {
        axios.get(url)
            .then((response) => {
                //console.log(response);
                this.setState({ character: response.data });
            }).catch((error) => {
                console.log(error)
            })
    }
    render(){
        return( 
                <div >
                    <div className=" d-flex flex-wrap flex-row justify-content-around mx-1 mb-3">
                        <div className="card2 col-md-3 mb-3 mx-3 mt-3" key={  this.state.character.episode_id }>
                            <div className="card-body2">
                                <h5 className="card-title text-center">{  this.state.character.title }</h5>
                            </div>
                        </div>                    
                    </div>
                </div>  
        );
    }
}

export default Films;