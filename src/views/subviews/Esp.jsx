import React, { Component } from 'react';
import axios from 'axios';

class Esp extends Component{
    constructor (props){
        super(props);
        this.state ={
            especie:[],
            name:[],
            classification:[],
            language: []
          }
    }
    componentWillMount(){
        
        axios.get(this.props.species)
        .then((response) => {
          this.setState({especie: response.data})
          this.setState({name: this.state.especie.name })
          this.setState({classification: this.state.especie.classification})
          this.setState({language: this.state.especie.language})
        }).catch((error) => {
          console.log(error)
        })
      } 
    render(){
        var species = <div key="index">
                
                <p className="list-group-item "><b>Name:</b> {this.state.name}</p>
                <p className="list-group-item "><b>Classification:</b> {this.state.classification}.</p>
                <p className="list-group-item "><b>Language:</b> {this.state.language}.</p>
                </div> 
        
        return(
            <div> 
                { species }
            </div>   
        );
    }
}

export default Esp;
