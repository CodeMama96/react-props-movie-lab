import React, { Component } from 'react'; 
import posterMap from "./MovieCard.js"

//pass down props from MovieCard


export default class CardFront extends Component {

  render() {
  
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
    
       
      
      </div>
    )
  }
}
