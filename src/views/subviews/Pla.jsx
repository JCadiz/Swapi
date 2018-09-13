import React, { Component } from 'react';
import axios from 'axios';

class Pla extends Component{
    constructor (props){
        super(props);
        this.state = {
            planetas:[],
            name:[]
          }
    }
    componentWillMount(){
       
        axios.get(this.props.homeworld)
        .then((response) => {
          this.setState({ planetas: response.data})
          this.setState({ name: this.state.planetas.name })
        }).catch((error) => {
          console.log(error)
        })
      } 
    render(){
        var planet = <div key="index">
                    <p className="list-group-item "><b>Homeland:</b> { this.state.name }.</p>   
                </div>
        return(
            <div>
                 { planet }
            </div> 
        );
    }
}

export default Pla;
