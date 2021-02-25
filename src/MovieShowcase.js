import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js' 

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
 
    
      return movieData.map(movie => <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />)
      //each movie data create a new MovieCard
//posterMap.map(poster => )
      //for every movie we want to pass down the movie data into the MovieCard, this is where props come in
      //movie =parent 
      //only pass down what you need, thru props
     
      // map over your movieData array and return an array of the correct JSX
      
    
  
  }

  render() {
    return (
      //JSX or the html that tells what the component will look like.

      //parent will render children
      <div id="movie-showcase">
        {this.generateMovieCards()}
       
      </div>
    )
  }
}
