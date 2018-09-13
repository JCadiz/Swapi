import React, { Component } from 'react';
import axios from 'axios';


class Films extends Component{
    constructor (props){
        super(props);
        this.state ={
            peli:[],
            title:[],
            episode_id:[]
          }
    }
    componentWillMount(){
        
        axios.get(this.props.films)
        .then((response) => {
          this.setState({peli: response.data})
          this.setState({title: this.state.peli.title })
          this.setState({episode_id: this.state.peli.episode_id })
        }).catch((error) => {
          console.log(error)
        })
      } 
    render(){
        var movie = <div key="index">
                       <p className="list-group-item "><b>Episode { this.state.episode_id }:</b> {this.state.title}</p>
                    </div>
        
        return(
            <div> 
                { movie }
            </div>   
        );
    }
}

export default Films;